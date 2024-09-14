import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Component() {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const questions = [
    "What is the primary goal of supervised learning in AI?",
    "Name a type of neural network that is commonly used for image processing.",
    "What is the purpose of the activation function in a neural network?",
    "Which algorithm is commonly used for gradient-based optimization in deep learning?",
    "What is the purpose of dropout in neural networks?",
    "Give an example of an unsupervised learning task.",
    "What is the purpose of the attention mechanism in deep learning?",
    "Name a common activation function used in neural networks.",
    "What is the main advantage of using transfer learning?",
    "What are the two main components of a Generative Adversarial Network (GAN)?",
  ];

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, submitted]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Submitted answers:", answers);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const getTimerColor = () => {
    if (timeLeft > 300) return "text-green-300";
    if (timeLeft > 120) return "text-yellow-300";
    return "text-red-300";
  };

  return (
    <div className="min-h-screen bg-[#04061e] text-gray-200 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[80svh] bg-[radial-gradient(ellipse_at_top,rgba(123,97,255,0.1)_0%,rgba(123,97,255,0.05)_25%,rgba(123,97,255,0)_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-[70svh] bg-[radial-gradient(circle_at_center_top,rgba(123,97,255,0.05)_0%,rgba(123,97,255,0.02)_30%,rgba(123,97,255,0)_60%)]" />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Poppins", sans-serif;
        }
        .custom-input:focus {
          outline: none;
          box-shadow: 0 0 0 1px #0047ab, 0 0 0 2px white;
          border-color: #0047ab;
        }
      `}</style>
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <Button
              className="p-2 text-gray-300 hover:text-gray-400 transition-colors duration-200"
              variant="link"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div
              className={`flex items-center text-2xl font-medium ${getTimerColor()}`}
            >
              <Clock className="mr-2 h-6 w-6" />
              {formatTime(timeLeft)}
            </div>
          </div>
          <h1 className="text-5xl font-semibold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-purple-300 to-indigo-400">
              AI Knowledge Quiz
            </span>
          </h1>
        </header>

        <div className="space-y-8">
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              className="bg-[#221e2cf6] rounded-lg shadow-lg p-8 mb-8 border border-[#63567d88]"
            >
              <div className="mb-4">
                <span className="text-xl font-semibold text-gray-200">
                  Question {qIndex + 1} of {questions.length}
                </span>
              </div>
              <div className="w-full h-1 bg-[#63567d88] rounded-full mt-2 mb-6"></div>
              <h2 className="text-2xl font-medium mb-6 text-gray-200">{q}</h2>
              <Input
                type="text"
                placeholder="Type your answer here"
                value={answers[qIndex]}
                onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                className="w-full bg-gray-100 text-gray-900 border-[#63567d88] placeholder-gray-500 custom-input"
              />
            </div>
          ))}
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-600 opacity-75 blur-sm rounded-lg"></div>
          <Button
            className={`w-full py-6 text-xl font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 transition-all duration-300 rounded-lg shadow-lg text-gray-200 relative z-10 ${
              !submitted ? "hover:scale-105" : ""
            }`}
            onClick={handleSubmit}
            disabled={submitted || answers.some((a) => a.trim() === "")}
          >
            {submitted ? "Quiz Submitted!" : "Submit Quiz"}
          </Button>
        </div>

        {submitted && (
          <div className="mt-8 text-center bg-green-600 text-gray-200 p-6 rounded-xl animate-pulse shadow-lg">
            <p className="text-2xl font-semibold">
              Your answers have been submitted successfully!
            </p>
            <p className="mt-2 text-lg">Check your results on the next page.</p>
          </div>
        )}

        <div className="h-2 w-full bg-[#63567d88] mt-8 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7b6ac0] rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: `${
                (answers.filter((a) => a.trim() !== "").length /
                  questions.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-center mt-2 text-gray-400 font-medium">
          {answers.filter((a) => a.trim() !== "").length} of {questions.length}{" "}
          questions answered
        </p>
      </div>
    </div>
  );
}
