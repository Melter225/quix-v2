import { useState } from "react";
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

export default function Component() {
  const [showExplanations, setShowExplanations] = useState<boolean[]>(
    Array(10).fill(false)
  );

  const quizResults = [
    {
      question: "What is the primary goal of supervised learning in AI?",
      userAnswer: "To predict outcomes based on labeled data",
      correctAnswer: "To predict outcomes based on labeled data",
      explanation:
        "Supervised learning aims to learn a function that maps an input to an output based on example input-output pairs.",
      isCorrect: true,
    },
    {
      question:
        "Name a type of neural network that is commonly used for image processing.",
      userAnswer: "Recurrent Neural Network (RNN)",
      correctAnswer: "Convolutional Neural Network (CNN)",
      explanation:
        "CNNs are specifically designed to process pixel data and are highly effective for image-related tasks.",
      isCorrect: false,
    },
    {
      question:
        "What is the purpose of the activation function in a neural network?",
      userAnswer: "To introduce non-linearity",
      correctAnswer: "To introduce non-linearity",
      explanation:
        "Activation functions introduce non-linear properties to the network, allowing it to learn complex patterns.",
      isCorrect: true,
    },
    {
      question:
        "Which algorithm is commonly used for gradient-based optimization in deep learning?",
      userAnswer: "Stochastic Gradient Descent (SGD)",
      correctAnswer: "Stochastic Gradient Descent (SGD)",
      explanation:
        "SGD is widely used due to its efficiency in handling large datasets and its ability to escape local minima.",
      isCorrect: true,
    },
    {
      question: "What is the purpose of dropout in neural networks?",
      userAnswer: "To speed up training",
      correctAnswer: "To reduce overfitting",
      explanation:
        "Dropout randomly deactivates neurons during training, which helps prevent the network from relying too heavily on any particular feature.",
      isCorrect: false,
    },
    {
      question: "Give an example of an unsupervised learning task.",
      userAnswer: "Clustering",
      correctAnswer: "Clustering",
      explanation:
        "Clustering is a common unsupervised learning task where the algorithm groups similar data points without pre-existing labels.",
      isCorrect: true,
    },
    {
      question:
        "What is the purpose of the attention mechanism in deep learning?",
      userAnswer: "To focus on relevant parts of the input",
      correctAnswer: "To focus on relevant parts of the input",
      explanation:
        "Attention allows the model to focus on specific parts of the input that are most relevant to the current task, improving performance on various sequence-to-sequence tasks.",
      isCorrect: true,
    },
    {
      question: "Name a common activation function used in neural networks.",
      userAnswer: "ReLU (Rectified Linear Unit)",
      correctAnswer: "ReLU (Rectified Linear Unit)",
      explanation:
        "ReLU is widely used due to its simplicity and effectiveness in mitigating the vanishing gradient problem.",
      isCorrect: true,
    },
    {
      question: "What is the main advantage of using transfer learning?",
      userAnswer: "It requires less training data",
      correctAnswer: "It requires less training data",
      explanation:
        "Transfer learning allows models to leverage knowledge from pre-trained models, reducing the amount of data and time needed for training on a new task.",
      isCorrect: true,
    },
    {
      question:
        "What are the two main components of a Generative Adversarial Network (GAN)?",
      userAnswer: "Generator and Discriminator",
      correctAnswer: "Generator and Discriminator",
      explanation:
        "In a GAN, the Generator creates synthetic data, while the Discriminator tries to distinguish between real and synthetic data.",
      isCorrect: true,
    },
  ];

  const toggleExplanation = (index: number) => {
    const newShowExplanations = [...showExplanations];
    newShowExplanations[index] = !newShowExplanations[index];
    setShowExplanations(newShowExplanations);
  };

  const correctAnswers = quizResults.filter(
    (result) => result.isCorrect
  ).length;

  const generatedContent = [
    {
      type: "document",
      title: "AI Fundamentals",
      icon: FileText,
      description:
        "This comprehensive document covers the fundamental concepts of Artificial Intelligence, including machine learning algorithms, neural networks, and deep learning techniques.",
    },
    {
      type: "video",
      title: "Neural Networks Explained",
      icon: Video,
      description:
        "A visual guide to understanding neural networks, their architecture, and how they process information to make predictions.",
    },
    {
      type: "website",
      title: "Interactive ML Playground",
      icon: Globe,
      description:
        "Explore machine learning concepts hands-on with our interactive web-based platform. Train models, visualize data, and understand AI algorithms in real-time.",
    },
  ];

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
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <Button
              className="p-2 text-gray-300 hover:text-gray-100 transition-colors duration-200"
              variant="link"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <h1 className="text-5xl font-semibold mb-4 flex items-center justify-center">
            <RefreshCw className="mr-4 w-8 h-8 text-gray-300 hover:text-gray-100 transition-colors duration-200 cursor-pointer" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-purple-300 to-indigo-400">
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
              <Button
                onClick={() => toggleExplanation(index)}
                className="mt-4 bg-[#63567d88] hover:bg-[#63567daa] text-white"
              >
                {showExplanations[index] ? "Hide" : "Show"} Explanation
              </Button>
              {showExplanations[index] && (
                <p className="mt-4 p-4 bg-[#63567d44] rounded-lg">
                  {result.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-purple-300 to-indigo-400">
              Generated Content
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generatedContent.map((content, index) => (
              <div
                key={index}
                className="bg-[#221e2cf6] rounded-lg shadow-lg p-6 border border-[#63567d88] hover:border-[#63567daa] transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <content.icon className="w-6 h-6 mr-3 text-purple-400" />
                  <h3 className="text-xl font-medium text-gray-200">
                    {content.title}
                  </h3>
                </div>
                <div
                  className={`text-gray-400 mb-4 h-20 overflow-hidden relative ${
                    content.type === "document" ? "fade-out" : ""
                  }`}
                >
                  <p>{content.description}</p>
                  {content.type === "document" && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#221e2cf6] to-transparent"></div>
                  )}
                </div>
                <Button className="w-full bg-[#63567d88] hover:bg-[#63567daa] text-white">
                  View {content.type}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
