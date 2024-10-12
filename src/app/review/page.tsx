"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Check,
  X,
  FileText,
  Video,
  Globe,
  RefreshCw,
} from "lucide-react";
import { IntegerType } from "mongodb";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "katex/dist/katex.min.css";

export default function Resources() {
  interface QuizResult {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    isCorrect: boolean;
  }

  interface Quiz {
    questions: string[];
    answers: string[];
  }

  interface Video {
    videoId: string;
    title: string;
  }

  interface Resource {
    document: string;
    video: string[];
  }

  const [showExplanations, setShowExplanations] = useState<boolean[]>(
    Array(10).fill(false)
  );
  const [resourceData, setResourceData] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [document, setDocument] = useState({ icon: FileText, description: "" });
  const [videos, setVideos] = useState<Video[]>([]);
  const fetchedRef = useRef(false);

  const config = {
    loader: { load: ["input/asciimath"] },
  };

  const fetchResources = useCallback(async (quiz: Quiz, title: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questions: quiz.questions
            .map(
              (q: string, i: number) =>
                `Question: ${q} Answer: ${quiz.answers[i]} `
            )
            .join(" "),
          quiz: title,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResourceData(data);

        const newQuizResults = data.allQuestions.map(
          (result: {
            question: string;
            userAnswer: string;
            isCorrect: boolean;
            correctAnswer: string;
            explanation: string;
          }) => ({
            question: result.question,
            userAnswer: result.userAnswer,
            correctAnswer: result.correctAnswer,
            explanation: result.explanation,
            isCorrect: result.isCorrect,
          })
        );

        setQuizResults(newQuizResults);
        setDocument({
          icon: FileText,
          description: data.document,
        });

        setVideos([
          {
            videoId: data.video[0].slice(32),
            title: "Neural Networks Explained",
          },
          {
            videoId: data.video[1].slice(32),
            title: "Introduction to Machine Learning",
          },
          {
            videoId: data.video[2].slice(32),
            title: "Deep Learning Basics",
          },
        ]);
      } else {
        console.error("Failed to generate resources");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (fetchedRef.current) return;

    const url =
      typeof window !== "undefined"
        ? window.location.href.split("review?")[1]
        : null;

    if (!url) {
      typeof window !== "undefined" && (window.location.href = "/");
      return;
    }

    let questions = decodeURIComponent(decodeURI(url))
      .split("||##||||##||||##||")
      .map(decodeURIComponent);

    const title = questions[0];
    let answers = questions.slice(1).slice(10, 20);
    questions = questions.slice(1).slice(0, 10);

    let quiz = {
      questions: questions,
      answers: answers,
    };

    fetchResources(quiz, title);
    fetchedRef.current = true;
  }, [fetchResources]);

  const toggleExplanation = (index: number) => {
    const newShowExplanations = [...showExplanations];
    newShowExplanations[index] = !newShowExplanations[index];
    setShowExplanations(newShowExplanations);
  };

  const correctAnswers = quizResults.filter(
    (result) => result.isCorrect
  ).length;

  return (
    <div className="min-h-screen bg-[#04061e] text-gray-200 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[80svh] bg-[radial-gradient(ellipse_at_top,rgba(123,97,255,0.1)_0%,rgba(123,97,255,0.05)_25%,rgba(123,97,255,0)_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-[70svh] bg-[radial-gradient(circle_at_center_top,rgba(123,97,255,0.05)_0%,rgba(123,97,255,0.02)_30%,rgba(123,97,255,0)_60%)]" />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
      {!isLoading ? (
        <div className="max-w-4xl mx-auto relative z-10">
          <header className="text-center mb-12">
            <div className="flex items-center justify-between mb-4">
              <Button
                className="p-2 text-gray-300 hover:text-gray-200 transition-colors duration-200"
                variant="link"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <h1 className="text-5xl font-medium mb-4 flex items-center justify-center">
              <RefreshCw className="mr-4 w-8 h-8 text-gray-300 hover:text-gray-200 transition-colors duration-200 cursor-pointer" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500">
                Review
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              You got {correctAnswers} out of {quizResults.length} correct!
            </p>
            <div className="h-2 w-full bg-[#63567d88] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7b6ac0] rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width: `${(correctAnswers / quizResults.length) * 100}%`,
                }}
              ></div>
            </div>
          </header>

          <div className="space-y-8">
            {quizResults.map((result, index) => (
              <div
                key={index}
                className="bg-[#221e2cf6] rounded-lg shadow-lg p-8 mb-8 border border-[#63567d88]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold text-gray-200">
                    Question {index + 1}
                  </span>
                  {result.isCorrect ? (
                    <span className="text-green-400 flex items-center">
                      <Check className="w-5 h-5 mr-1" /> Correct
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center">
                      <X className="w-5 h-5 mr-1" /> Incorrect
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-medium mb-4 text-gray-200">
                  {result.question}
                </h2>
                <p className="mb-2">
                  <strong>Your answer:</strong> {result.userAnswer}
                </p>
                {!result.isCorrect && (
                  <p className="mb-2">
                    <strong>Correct answer:</strong> {result.correctAnswer}
                  </p>
                )}
                {!result.isCorrect && (
                  <Button
                    onClick={() => toggleExplanation(index)}
                    className="mt-4 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200 text-gray-200"
                  >
                    {showExplanations[index] ? "Hide" : "Show"} Explanation
                  </Button>
                )}
                {showExplanations[index] && (
                  <p className="mt-4 p-4 bg-[#2a2638] rounded-lg">
                    {result.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 mb-12">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500">
                Resources
              </span>
            </h2>
            <div className="space-y-8">
              <div className="bg-[#221e2cf6] rounded-lg shadow-lg p-6 border border-[#63567d88]">
                <div className="flex items-center mb-4">
                  <document.icon className="w-6 h-6 mr-3 text-purple-400" />
                  <h3 className="text-xl font-medium text-gray-200">
                    Document
                  </h3>
                </div>
                <div className="text-gray-400 mt-[-1rem] mb-4 h-52 overflow-hidden relative markdown-styling">
                  <MathJaxContext config={config}>
                    <MathJax>
                      <Markdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex, rehypeRaw]}
                      >
                        {document.description
                          .split("\n")
                          .slice(0, 5)
                          .join("\n")}
                      </Markdown>
                    </MathJax>
                  </MathJaxContext>
                  <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#221e2cf6] to-transparent"></div>
                </div>
                <Button
                  className="w-full bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200 text-gray-200"
                  onClick={() => {
                    window.location.href = `/viewing?${encodeURIComponent(
                      document.description
                    )}`;
                  }}
                >
                  Read Document
                </Button>
              </div>

              <div className="bg-[#221e2cf6] rounded-lg shadow-lg p-6 border border-[#63567d88]">
                <div className="flex items-center mb-4">
                  <Video className="w-6 h-6 mr-3 text-purple-400" />
                  <h3 className="text-xl font-medium text-gray-200">Videos</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="bg-[#2a2638] rounded-lg p-4 flex flex-col"
                    >
                      <h4 className="text-lg font-medium text-gray-200 mb-2 text-left md:text-center">
                        {video.title}
                      </h4>
                      <div
                        className="aspect-w-16 aspect-h-9 w-full"
                        onClick={() => {
                          window.location.assign(
                            `https://www.youtube.com/watch?v=${video.videoId}`
                          );
                        }}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${video.videoId}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-md"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
