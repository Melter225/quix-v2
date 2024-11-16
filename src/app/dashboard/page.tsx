"use client";

import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { Fragment, useState, useEffect } from "react";
import prisma from "@/lib/db";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "katex/dist/katex.min.css";
import ReactDOMServer from "react-dom/server";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Billing", href: "/billing", current: false },
  { name: "Features", href: "/features", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  // const userImage: any = session?.user?.image;
  // const email_signin: string | undefined =
  //   window.location.pathname.match(/\/dashboard\/(.+)$/)?.[1];
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("Mode");
  const [isOpen2, setIsOpen2] = useState(false);
  const [open, setOpen] = useState(true);
  const [topic, setTopic] = useState("");
  const [audio, setAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [document, setDocument] = useState("");
  const [space, setSpace] = useState("");
  const [spaceClicked, setSpaceClicked] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupVisibility, setPopupVisibility] = useState(false);

  // const document = `The lift coefficient ($C_L$) is a dimensionless coefficient.`
  const database = [
    { quiz: "Solve for x: 3x + 5 = 14", accuracy: 100 },
    { quiz: "Solve for x: 2x + 7 = 15", accuracy: 70 },
    { quiz: "Solve for y: 3y - 5 = 4y + 2", accuracy: 80 },
    { quiz: "Solve for x: 5x = 25", accuracy: 100 },
    { quiz: "Solve for x: x^2 = 16", accuracy: 50 },
  ];
  const answers = [
    "Answer: x = 3. Explanation: To solve for x, I first subtract 5 from both sides of the equation: 3x + 5 - 5 = 14 - 5. This simplifies to: 3x = 9. Next, I divide both sides by 3: 3x / 3 = 9 / 3. x = 3.",
    "Answer: x = 1 Explanation: To solve for x, I subtract 7 from both sides: 2x + 7 - 7 = 15 - 7 This simplifies to: 2x = 8 Then, I divide both sides by 2: 2x / 2 = 8 / 2 x = 1",
    "Answer: y = -7 Explanation: To solve for y, I subtract 3y from both sides: 3y - 5 - 3y = 4y + 2 - 3y This simplifies to: -5 = y + 2 Next, I subtract 2 from both sides: -5 - 2 = y + 2 - 2 y = -7",
    "Answer: x = 5 Explanation: To solve for x, I divide both sides by 5: 5x / 5 = 25 / 5 x = 5",
    "Answer: x = 4 Explanation: To solve for x, I take the square root of both sides: sqrt(x^2) = sqrt(16) This simplifies to: x = 4",
  ];
  const note = `The Pythagorean theorem is a fundamental principle in geometry. It states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This relationship can be expressed as a^2 + b^2 = c^2, where c is the hypotenuse. The theorem is named after the ancient Greek mathematician Pythagoras. It is widely used in various fields such as architecture, engineering, and physics. A common example of its application is determining the distance between two points on a plane. The theorem only applies to right-angled triangles. It has been proven through various methods, including algebraic and geometric proofs. Understanding the Pythagorean theorem is essential for studying more advanced mathematical concepts.`;
  const order = "comprehensive";
  const errors = ["Square root of 81", "Boiling point of water"];
  const points = ["Pythagorean Theorem", "Derivatives", "Prime Numbers"];

  let firstName;
  let lastName;
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  const showPopup = (document: string) => {
    console.log(document);
    setPopupVisibility(!popupVisibility);
    setPopupContent(document);
  };

  async function renameSpace(
    spaceName: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.stopPropagation();
    try {
      const response = await fetch("/api/renameSpace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spaceName, email: session?.user?.email }),
      });
      if (response.ok) {
        const spaceContainers =
          window.document.getElementsByClassName("space-container");
        const spaceContainer = spaceContainers[0];
        while (
          spaceContainer.childElementCount >= 1 &&
          spaceContainer.lastElementChild
        ) {
          spaceContainer.removeChild(spaceContainer.lastElementChild);
        }
        loadSpaces();
      } else {
        console.error("Failed to delete space");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function deleteSpace(
    spaceName: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.stopPropagation();
    try {
      const response = await fetch("/api/deleteSpace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spaceName, email: session?.user?.email }),
      });
      if (response.ok) {
        const spaceContainers =
          window.document.getElementsByClassName("space-container");
        const spaceContainer = spaceContainers[0];
        while (
          spaceContainer.childElementCount >= 1 &&
          spaceContainer.lastElementChild
        ) {
          spaceContainer.removeChild(spaceContainer.lastElementChild);
        }
        loadSpaces();
      } else {
        console.error("Failed to delete space");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  window.onload = () => {
    loadSpaces();
  };

  function handleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    const space = e.currentTarget.parentElement?.nextSibling;
    console.log(space);
    if (space && space instanceof HTMLElement) {
      if (space.classList.contains("hidden")) {
        space.classList.remove("hidden");
      } else {
        space.classList.add("hidden");
      }
    }
    setMenuVisibility((prev_menuVisibility) => !prev_menuVisibility);
    console.log(menuVisibility);
  }

  async function loadSpaces() {
    try {
      const response = await fetch("/api/loadSpaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session?.user?.email }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Generated spaces:", data);
        for (const item of data.spaces) {
          const spaceContainers =
            window.document.getElementsByClassName("space-container");
          const spaceContainer = spaceContainers[0];
          const spaceDiv = window.document.createElement("div");
          const SpaceDocument = () => (
            <button
              className="w-full"
              onClick={() => {
                const spaceName = item;
                console.log(spaceName, space);
                // if (spaceName !== space) {
                loadResources(spaceName);
                // }
              }}
            >
              <div className="flex p-2 px-3 mb-3 justify-end bg-[#2a2638] hover:bg-[#302c41] transition-colors duration-200 rounded-lg hover:cursor-pointer items-center group">
                <div className="flex w-full justify-start">
                  <p className="mr-2 text-gray-200">{item}</p>
                </div>
                <Image
                  src="/menu.png"
                  alt="Menu"
                  className="hidden invert-hover group-hover:block h-4 w-4"
                  width={24}
                  height={24}
                  onClick={handleClick}
                  style={{
                    imageRendering: "auto",
                    filter: "invert(80%)",
                  }}
                />
              </div>
              <div className="space_menu fixed hidden bg-[hsla(257,19%,15%,1)] divide-y divide-[#63567d88] border-[1px] border-[#63567d88] rounded-lg shadow z-50 w-[calc(25svw-3rem)]">
                <div className="py-2">
                  <a
                    href="#"
                    className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#1a1722f6]"
                    onClick={(e) => renameSpace(item, e)}
                  >
                    Rename
                  </a>
                </div>
                <div className="py-2">
                  <a
                    href="#"
                    className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#1a1722f6]"
                    onClick={(e) => deleteSpace(item, e)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </button>
          );
          if (spaceContainer) {
            const spaceDocumentString = window.document.createElement("div");
            spaceDiv.append(spaceDocumentString);
            spaceContainer.appendChild(spaceDiv);
            const root = createRoot(spaceDocumentString);
            root.render(<SpaceDocument />);
          }
        }
      } else {
        console.error("Failed to generate spaces");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const loadResources = async (spaceName: string) => {
    console.log("Old space:", space);
    console.log("New space name:", spaceName);
    // console.log(spaceName);
    setSpace(spaceName);
    try {
      const response = await fetch("/api/loadResources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ space: spaceName }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Generated resources:", data);
        let websites = [
          {
            url: "",
            title: "",
            icon: "",
          },
          {
            url: "",
            title: "",
            icon: "",
          },
          {
            url: "",
            title: "",
            icon: "",
          },
        ];
        const resourceContainers =
          window.document.getElementsByClassName("resource-container");
        const resourceContainer = resourceContainers[0];
        while (
          resourceContainer.childElementCount > 1 &&
          resourceContainer.lastElementChild
        ) {
          resourceContainer.removeChild(resourceContainer.lastElementChild);
        }
        resourceContainer.firstElementChild?.classList.add("hidden");
        resourceContainer.classList.add("pt-1");
        setSpaceClicked(true);
        for (const item of data.resources) {
          console.log(item);
          websites = [
            {
              url: item.websites[0].website,
              title: "",
              icon: "/placeholder.svg?height=80&width=80",
            },
            {
              url: item.websites[1].website,
              title: "",
              icon: "/placeholder.svg?height=80&width=80",
            },
            {
              url: item.websites[2].website,
              title: "",
              icon: "/placeholder.svg?height=80&width=80",
            },
          ];
          const resource = window.document.createElement("div");
          const ResourceDocument = () => (
            <a
              href={
                item.learn_name
                  ? ""
                  : item.videos
                  ? `/viewing`
                  : `/testing?${item.quiz_name
                      .concat("||##||||##||||##||")
                      .concat(
                        item.questions
                          ?.map((model) => model.question)
                          .join("||##||||##||||##||")
                      )}`
              }
              onClick={(e) => {
                if (item.learn_name) {
                  e.preventDefault();
                  showPopup(item.document?.document);
                }
              }}
            >
              <div className="bg-[#221e2cf6] border-[#63567d88] border-[1px] text-gray-200 font-poppins mt-[0.74rem] mr-8 ml-8 pr-8 pl-8 pb-6 rounded-lg">
                <div className="markdown-styling-2">
                  <h2 className="mt-1">{item.learn_name || item.quiz_name}</h2>
                  <div className="relative">
                    <div className="text-gray-200 mask-image-fade">
                      <MathJaxContext config={config}>
                        <MathJax>
                          <Markdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex, rehypeRaw]}
                          >
                            {item.document?.document
                              .split("\n")
                              .slice(0, 3)
                              .join("\n") ||
                              item.questions
                                ?.map((model) => model.question)
                                .splice(0, 2)
                                .join("\n\n")}
                          </Markdown>
                        </MathJax>
                      </MathJaxContext>
                    </div>
                  </div>
                </div>

                {item.videos[0] && item.websites[0] ? (
                  <div className="flex flex-col md:flex-row justify-between h-24">
                    <div className="flex flex-row flex-wrap justify-between h-1/2 md:h-full md:w-1/2">
                      {item.videos
                        .slice(0, 3)
                        .map((video: { video: string }, index: number) => (
                          <iframe
                            key={`video-${index}`}
                            src={`https://www.youtube.com/embed/${video.video.slice(
                              32
                            )}`}
                            className="rounded-md w-[32%] h-[94%] mt-2"
                          ></iframe>
                        ))}
                    </div>

                    <div className="flex flex-row flex-wrap justify-between h-1/2 md:h-full md:w-1/2">
                      {websites.slice(0, 3).map((website, index: number) => (
                        <div
                          key={`website-${index}`}
                          className="bg-[#2a2638] shadow-lg rounded-md w-[32%] mt-2 border border-[#63567d88]"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            window.open(website.url, "_blank");
                          }}
                        >
                          <div className="flex flex-col h-full justify-center items-center">
                            <Globe className="w-6 h-6 text-purple-400" />
                            <h3 className="font-medium text-gray-200">
                              Website
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {item.websites[0] && !item.videos[0] ? (
                  <div className="flex flex-row justify-between h-24">
                    {item.websites
                      .slice(0, 3)
                      .map((website: { website: string }, index: number) => (
                        <div
                          key={`website-${index}`}
                          className="bg-[#2a2638] shadow-lg rounded-md w-[32%] mt-2 border border-[#63567d88]"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            window.open(website.website, "_blank");
                          }}
                        >
                          <div className="flex flex-col h-full justify-center items-center">
                            <Globe className="w-6 h-6 text-purple-400" />
                            <h3 className="font-medium text-gray-200">
                              Website
                            </h3>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            </a>
          );
          if (resourceContainer) {
            const resourceDocumentString = window.document.createElement("div");
            resource.append(resourceDocumentString);
            resourceContainer.appendChild(resource);
            const root = createRoot(resourceDocumentString);
            root.render(<ResourceDocument />);
          }
        }
      } else {
        console.error("Failed to generate resources");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (username) {
    firstName = username.split(" ")[0];
  }

  if (username) {
    lastName = username.split(" ")[1];
  }

  const toggleDropdown = (newMode: string) => {
    setIsOpen(!isOpen);
    if (newMode != "Mode") {
      setMode(newMode);
    }
    console.log(mode);
  };

  const toggleDropdown2 = (newMode: string) => {
    setIsOpen2(!isOpen2);
  };

  // const convertStringToImage = (base64String: string): string => {
  //   if (
  //     base64String.startsWith("http://") ||
  //     base64String.startsWith("https://")
  //   ) {
  //     return base64String;
  //   }

  //   try {
  //     const byteCharacters = atob(base64String.split(",")[1]);
  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     const blob = new Blob([byteArray], { type: "image/jpeg" });
  //     return URL.createObjectURL(blob);
  //   } catch (error) {
  //     console.error("Error converting base64 to image URL:", error);
  //     return "";
  //   }
  // };

  const fetchCredentials = async () => {
    try {
      const response = await fetch("/api/dashboardCredentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session?.user?.email }),
      });

      const data = await response.json();
      // console.log(data);
      setUsername(data.username);
      // setProfile(convertStringToImage(data.profile));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchCredentials();
  // console.log(username, profile);
  // console.log(JSON.stringify({ topic: topic }));

  const generateQuestions = async () => {
    try {
      const response = await fetch("/api/generation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic, space: space }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Generated questions:", data);
        const quizContainers =
          window.document.getElementsByClassName("resource-container");
        const quizContainer = quizContainers[0];
        const quiz = window.document.createElement("div");
        console.log(data);
        const quizQuestions = (
          <a
            href={`/testing?${`Quiz ${data.quizValue}`
              .concat("||##||||##||||##||")
              .concat(data.questions.join("||##||||##||||##||"))}`}
          >
            <div className="bg-[#221e2cf6] border-[#63567d88] border-[1px] text-gray-200 font-poppins mt-[0.74rem] r-8 ml-8 mr-8 pr-8 pl-8 pb-6 rounded-lg">
              <div className="markdown-styling-2">
                <h2 className="mt-1">Quiz {data.quizValue}</h2>
                <div className="relative">
                  <div className="text-gray-200 mask-image-fade">
                    <MathJaxContext config={config}>
                      <MathJax>
                        <Markdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex, rehypeRaw]}
                        >
                          {data.questions.splice(0, 2).join("\n\n")}
                        </Markdown>
                      </MathJax>
                    </MathJaxContext>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between h-24">
                  {data.website
                    .slice(0, 3)
                    .map((website: { url: string }, index: number) => (
                      <div
                        key={`website-${index}`}
                        className="bg-[#2a2638] shadow-lg rounded-md w-[32%] mt-2 border border-[#63567d88]"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(website.url, "_blank");
                        }}
                      >
                        <div className="flex flex-col h-full justify-center items-center">
                          <Globe className="w-6 h-6 text-purple-400" />
                          <h3 className="font-medium text-gray-200">Website</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </a>
        );
        // const mathJaxContext = window.document.createElement(MathJaxContext);
        if (quizContainer) {
          // mathJax.append(markdown);
          // mathJaxContext.append(mathJax);
          // learnDocument.append(mathJaxContext);
          const learnDocumentString = window.document.createElement("div");
          learnDocumentString.innerHTML =
            ReactDOMServer.renderToString(quizQuestions);
          quiz.append(learnDocumentString);
          quizContainer.appendChild(quiz);
        }
      } else {
        console.error("Failed to generate questions");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // try {
    //   const response = await fetch("/api/resources", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Generated resources:", data);
    //   } else {
    //     console.error("Failed to generate resources");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // try {
    //     const response = await fetch('/api/priority', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ topics: database, order, answers }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated priority:', data);
    //     } else {
    //         console.error('Failed to generate priority');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
    // try {
    //     const response = await fetch('/api/redo', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ topics: errors }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated questions:', data);
    //     } else {
    //         console.error('Failed to generate questions');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
    // try {
    //     const response = await fetch('/api/luna', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });

    //     setAudio(true)

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated audio:', data);

    // const audioBlob = new Blob([JSON.stringify(data.audio)], {
    //     type: "application/json",
    // });
    // const audioObjectUrl = URL.createObjectURL(audioBlob);
    // setAudioUrl(audioObjectUrl);

    // const playAudio = () => {
    //     if (audioUrl) {
    //       const audio = new Audio(audioUrl);
    //       audio.play().catch(error => {
    //         console.error('Error playing audio:', error);
    //       });
    //     }
    //   };
    //     } else {
    //         console.error('Failed to generate audio');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
  };

  const playAudio = () => {
    const audio = new Audio("/output.mp3");
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  if (audio == true) {
    console.log(audio);
    playAudio();
    setAudio(false);
    return;
  } else {
    // console.log(audio);
  }

  const learn = async () => {
    try {
      // const response = await fetch("/api/learn", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ topic: topic, space: space }),
      // });

      // if (response.ok) {
      // const data = await response.json();
      // console.log("Generated resources:", data);
      // console.log(data.document);
      // setDocument(data.document);
      const websites = [
        {
          // url: data.website[0],
          url: "youtube.com",
          title: "",
          icon: "/placeholder.svg?height=80&width=80",
        },
        {
          // url: data.website[1],
          url: "youtube.com",
          title: "",
          icon: "/placeholder.svg?height=80&width=80",
        },
        {
          // url: data.website[2],
          url: "youtube.com",
          title: "",
          icon: "/placeholder.svg?height=80&width=80",
        },
      ];
      const learnContainers =
        window.document.getElementsByClassName("resource-container");
      const learnContainer = learnContainers[0];
      const learn = window.document.createElement("div");
      const learnDocument = (
        <a
          href="/youtube.com"
          onClick={(e) => {
            e.preventDefault();
            // showPopup(data.document);
          }}
        >
          <div className="bg-[#221e2cf6] border-[#63567d88] border-[1px] text-gray-200 font-poppins mt-[0.74rem] mr-8 ml-8 pr-8 pl-8 pb-6 rounded-lg">
            <div className="markdown-styling-2">
              {/* <h2 className="mt-1">Learn {data.learnValue}</h2> */}
              <div className="relative">
                <div className="text-gray-200 mask-image-fade">
                  <MathJaxContext config={config}>
                    <MathJax>
                      <Markdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex, rehypeRaw]}
                      >
                        {/* {data.document.split("\n").slice(0, 3).join("\n")} */}
                      </Markdown>
                    </MathJax>
                  </MathJaxContext>
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex flex-col md:flex-row justify-between h-24"
                onClick={() => {
                  console.log("test4");
                }}
              >
                <div className="flex flex-row flex-wrap justify-between h-1/2 md:h-full md:w-1/2">
                  {/* {data.videoIds
                      .slice(0, 3)
                      .map((videoId: string, index: number) => (
                        <iframe
                          key={`video-${index}`}
                          src={`https://www.youtube.com/embed/${videoId}`}
                          className="rounded-md w-[32%] h-[94%] mt-2"
                        ></iframe>
                      ))} */}
                </div>

                <div
                  className="flex flex-row flex-wrap justify-between h-1/2 md:h-full md:w-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("test3");
                  }}
                >
                  {websites.slice(0, 3).map((website, index: number) => (
                    <div
                      key={`website-${index}`}
                      className="bg-[#2a2638] shadow-lg rounded-md w-[32%] mt-2 border border-[#63567d88]"
                      onClick={(e) => {
                        console.log("test1");
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(
                          "https://www.youtube.com/watch?v=N7ZmPYaXoic"
                        );
                      }}
                    >
                      <div
                        className="flex flex-col h-full justify-center items-center"
                        onClick={() => {
                          console.log("test2");
                        }}
                      >
                        <Globe className="w-6 h-6 text-purple-400" />
                        <h3 className="font-medium text-gray-200">Website</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      );
      // const mathJaxContext = window.document.createElement(MathJaxContext);
      if (learnContainer) {
        // mathJax.append(markdown);
        // mathJaxContext.append(mathJax);
        // learnDocument.append(mathJaxContext);
        const learnDocumentString = window.document.createElement("div");
        learnDocumentString.innerHTML =
          ReactDOMServer.renderToString(learnDocument);
        learn.append(learnDocumentString);
        learnContainer.appendChild(learn);
      }
      // } else {
      //   console.error("Failed to generate resources");
      // }
    } catch (error) {
      console.error("Error:", error);
    }
    // try {
    //     const response = await fetch('/api/accuracy', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ note: note }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated accuracy:', data);
    //     } else {
    //         console.error('Failed to generate accuracy');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
    // try {
    //     const response = await fetch('/api/notes', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ topic: topic }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated notes:', data);
    //     } else {
    //         console.error('Failed to generate notes');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
    // try {
    //     const response = await fetch('/api/notesQuiz', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ points: points }),
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Generated accuracy:', data);
    //     } else {
    //         console.error('Failed to generate accuracy');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    // }
  };

  const newSpace = async () => {
    try {
      const response = await fetch("/api/space", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session?.user?.email }),
      });

      if (response.ok) {
        const data = await response.json();
        const spaceContainers =
          window.document.getElementsByClassName("space-container");
        const spaceContainer = spaceContainers[0];
        const resourceContainers =
          window.document.getElementsByClassName("resource-container");
        const resourceContainer = resourceContainers[0];
        resourceContainer.firstElementChild?.classList.add("hidden");
        resourceContainer.classList.add("pt-1");
        setSpaceClicked(true);
        const spaceDiv = window.document.createElement("div");
        while (
          resourceContainer.childElementCount > 1 &&
          resourceContainer.lastElementChild
        ) {
          resourceContainer.removeChild(resourceContainer.lastElementChild);
        }
        const SpaceDocument = () => (
          <button
            className="w-full"
            onClick={() => {
              const spaceName = `Space ${data.spaceValue}`;
              console.log(spaceName, space);
              // if (spaceName !== space) {
              loadResources(spaceName);
              // }
            }}
          >
            <div className="flex p-2 px-3 mb-3 justify-end bg-[#2a2638] hover:bg-[#302c41] transition-colors duration-200 rounded-lg hover:cursor-pointer items-center group">
              <div className="flex w-full justify-start">
                <p className="mr-2 text-gray-200">Space {data.spaceValue}</p>
              </div>
              <Image
                src="/menu.png"
                alt="Menu"
                className="hidden invert-hover group-hover:block h-4 w-4"
                width={24}
                height={24}
                onClick={handleClick}
                style={{
                  imageRendering: "auto",
                  filter: "invert(80%)",
                }}
              />
            </div>
            <div className="space_menu fixed hidden bg-[hsla(257,19%,15%,1)] divide-y divide-[#63567d88] border-[1px] border-[#63567d88] rounded-lg shadow z-50 w-[calc(25svw-3rem)]">
              <div className="py-2">
                <a
                  href="#"
                  className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#1a1722f6]"
                  onClick={(e) => renameSpace(`Space ${data.spaceValue}`, e)}
                >
                  Rename
                </a>
              </div>
              <div className="py-2">
                <a
                  href="#"
                  className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#1a1722f6]"
                  onClick={(e) => deleteSpace(`Space ${data.spaceValue}`, e)}
                >
                  Delete
                </a>
              </div>
            </div>
          </button>
        );
        if (spaceContainer) {
          const spaceDocumentString = window.document.createElement("div");
          spaceDiv.append(spaceDocumentString);
          spaceContainer.prepend(spaceDiv);
          const root = createRoot(spaceDocumentString);
          root.render(<SpaceDocument />);
        }
      } else {
        console.error("Failed to generate resources");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   if (status === "unauthenticated") {
  //     window.location.href = "/"
  //   }

  return (
    <main className="font-poppins">
      <div
        className={`absolute inset-0 pointer-events-none top-0 ${
          open ? "left-[25svw]" : "left-0"
        } right-0 h-[80svh] bg-[radial-gradient(ellipse_at_top,rgba(123,97,255,0.1)_0%,rgba(123,97,255,0.05)_25%,rgba(123,97,255,0)_70%)]`}
      />
      <div
        className={`absolute top-0 ${
          open ? "left-[25svw]" : "left-0"
        } right-0 h-[70svh] bg-[radial-gradient(circle_at_center_top,rgba(123,97,255,0.05)_0%,rgba(123,97,255,0.02)_30%,rgba(123,97,255,0)_60%)]`}
      />
      <div>
        <div className="min-h-full">
          {/* <header className="bg-gray-200 shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dashboard</h1>
                </div>
            </header> */}
          <main>
            <div className="h-[100svh]">
              <div className="hidden md:flex flex-col h-full w-full justify-start items-start pl-6 pt-6">
                <Disclosure>
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-200 h-8"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="absolute -inset-0.5 z-40" />
                    <span className="sr-only">Open main menu</span>
                    <Image
                      src="/togglesidebar.png"
                      alt="Toggle Sidebar"
                      className="block h-6 w-6"
                      width={24}
                      height={24}
                      style={{
                        imageRendering: "auto",
                      }}
                    />
                    {/* {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-red-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-gray-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    )} */}
                  </Disclosure.Button>
                  <Disclosure.Button
                    className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-200 h-8 ml-[calc(25svw-4.5rem)] mt-[-2rem] ${
                      open ? "flex" : "hidden"
                    }`}
                    onClick={newSpace}
                  >
                    <span className="absolute -inset-0.5 z-40" />
                    <span className="sr-only">Open main menu</span>
                    <Image
                      src="/newspace.png"
                      alt="New Space"
                      className="block h-[1.375rem] w-[1.375rem]"
                      width={24}
                      height={24}
                      style={{
                        imageRendering: "auto",
                      }}
                    />
                    {/* {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-red-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-gray-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    )} */}
                  </Disclosure.Button>
                </Disclosure>
              </div>
              <div className="relative z-50 flex md:hidden flex-col h-full w-full justify-start items-start">
                <Disclosure defaultOpen={!open}>
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-200 h-8"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Image
                      src="/togglesidebar.png"
                      alt="Toggle Sidebar"
                      className="block h-6 w-6"
                      width={24}
                      height={24}
                      style={{
                        imageRendering: "auto",
                      }}
                    />
                    {/* {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-red-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-gray-700 bg-gray-300 rounded-md"
                        aria-hidden="true"
                      />
                    )} */}
                  </Disclosure.Button>
                </Disclosure>
              </div>
              <div
                className={`bg-[#221e2cf6] w-[calc(25svw-1rem)] h-[calc(100svh-2rem)] ml-4 rounded-[1rem] border border-[#63567d88] hidden md:${
                  open ? "flex mr-[25svw]" : "hidden"
                } mt-[calc(-100svh+1rem)]`}
              >
                <div className="flex flex-col h-full justify-end items-center px-4 w-full">
                  {/* <div className="relative z-50 flex-col h-full w-full justify-start items-start">
                    <h1 className="text-center align-middle mt-2 text-xl font-bold tracking-tight text-gray-700">
                      New Space
                    </h1>
                  </div> */}
                  <div className="space-container relative flex flex-col flex-grow mt-14 overflow-y-auto max-h-[77svh] mb-6 w-full mx-20 hide-scrollbar"></div>
                  <button className="flex items-center justify-center px-2 py-[1rem] rounded-[0.6rem] text-gray-200 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200 font-semibold lg:text-base sm:text-base w-full h-11 mb-3">
                    <span className="items-center">
                      <div className="flex h-full justify-center align-middle"></div>
                      Upgrade Plan
                    </span>
                  </button>
                  {/* <button className="flex items-center justify-center px-2 py-[0.3rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full h-9 mb-4">
                            <div className="flex h-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:hidden self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <span className="hidden sm:flex items-center">
                                <div className="flex h-full justify-center align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-[0.3rem] self-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                Topic
                            </span>
                        </button> */}
                </div>
                {/* <div className="w-full mt-3 px-4">
                            <button className="bg-gray-200 flex items-center justify-start px-2 py-[0.6rem] rounded-xl text-gray-600 hover:bg-gray-300 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full mt-2" onClick={() => toggleDropdown2('Mode')}>
                                <Image className="ml-3 mr-4 rounded-full" src="/billing.png" alt="Profile Picture" width={30} height={30}></Image> 
                                User
                            </button>

                            <div
                                className={`relative z-50 ${isOpen2 ? 'block' : 'hidden'} bg-gray-200 divide-y divide-gray-300 rounded-lg shadow w-full ml-[0rem] mt-[-10.5rem] sm:mt-[-10.6rem] lg:mt-[-11.5rem]`}
                            >
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Billing
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Settings
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div> */}
              </div>
              <div
                className={`${
                  open ? "flex" : "hidden"
                } relative z-40 bg-gray-200 mr-[25svw] w-[80svw] sm:w-[65svw] h-[calc(100svh-5.65rem)] md:hidden mt-[-2.5rem]`}
              >
                <div className="flex flex-col h-full justify-end items-center px-4 w-full">
                  {/* <div className="relative z-50 flex-col h-full w-full justify-start items-start">
                    <h1 className="text-center align-middle mt-2 text-xl font-bold tracking-tight text-gray-700">
                      New Space
                    </h1>
                  </div> */}
                  <button className="flex items-center justify-center px-2 py-[1rem] rounded-xl text-gray-200 hover:text-gray-300 border-[1px] border-gray-200 hover:border-gray-300 font-semibold lg:text-base sm:text-base w-full h-11 mb-3">
                    <span className="items-center">
                      <div className="flex h-full justify-center align-middle"></div>
                      Upgrade Plan
                    </span>
                  </button>
                  {/* <button className="z-50 flex items-center justify-center px-2 py-[0.3rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full h-9 mb-4">
                            <div className="flex h-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:hidden self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <span className="hidden sm:flex items-center">
                                <div className="flex h-full justify-center align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-[0.3rem] self-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                Topic
                            </span>
                        </button> */}
                </div>
              </div>
              <div
                className={`${
                  open ? "absolute" : "fixed"
                } flex flex-col w-full h-full top-0 ${
                  open ? "md:w-[75svw] md:ml-[25svw]" : "md:w-full"
                } rounded-lg`}
              >
                <div
                  className={`resource-container relative flex flex-col flex-grow top-0 overflow-y-auto max-h-[90svh] mb-6 z-40 ${
                    open ? "" : "w-[95%] ml-[5%]"
                  }`}
                >
                  <div className="block overflow-y-hidden h-full">
                    <div
                      className={`flex mt-[0.74rem] ${
                        open
                          ? "ml-[calc(75svw-40%-1rem)]"
                          : "ml-[calc(100svw-45.3%-1rem)]"
                      } bg-[#221e2cf6] border-[1px] border-[#63567d88] rounded-lg w-[40%] h-8 items-center justify-center hover:cursor-pointer`}
                    >
                      <div className="flex flex-row w-[45%] mr-2 h-full justify-center items-center">
                        <Image
                          src="/settings.png"
                          alt="Settings"
                          className="block h-5 w-5 mr-[10%]"
                          width={24}
                          height={24}
                          style={{
                            imageRendering: "auto",
                          }}
                        />
                        <p className="text-gray-200 mr-2">Settings</p>
                      </div>
                      <div className="ml-[-0.25rem] border-r-[1px] border-r-[#63567d88] h-full"></div>
                      <div className="flex flex-row w-[45%] h-full items-center justify-center">
                        <Image
                          src="/logout.png"
                          alt="Logout"
                          className="block h-5 w-5 mr-[10%]"
                          width={24}
                          height={24}
                          style={{
                            imageRendering: "auto",
                          }}
                        />
                        <p className="text-gray-200">Logout</p>
                      </div>
                    </div>
                    <h1 className="text-5xl font-semibold text-center justify-center mt-[6%]">
                      <div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500">
                          Hi,
                        </span>
                        <span className="mx-2"></span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500">
                          {firstName}
                        </span>
                      </div>
                      {lastName && (
                        <div className="mt-2">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500">
                            {lastName}
                          </span>
                        </div>
                      )}
                    </h1>
                    <div
                      className={`flex flex-row mt-10 w-full h-full ${
                        open ? "" : "ml-[-2.5%]"
                      }`}
                    >
                      <div className="ml-[2.5%] mr-[2.5%] border-[1px] border-[#63567d88] rounded-lg h-[23rem] w-[30%]">
                        <div className="bg-indigo-800 rounded-lg w-[92%] h-[24%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <Image
                            src="/examples.png"
                            alt="Examples"
                            className="block h-6 w-6 mr-2"
                            width={24}
                            height={24}
                            style={{
                              imageRendering: "auto",
                            }}
                          />
                          <p className="text-gray-200">Examples</p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Explain the water cycle to a five year old using a
                            bathtub as an analogy.
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Teach the basics of economics through a lemonade
                            stand business simulation.
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Explain Shakespeare&apos;s iambic pentameter as a
                            poetic heartbeat.
                          </p>
                        </div>
                      </div>
                      <div className="border-[1px] border-[#63567d88] rounded-lg h-[23rem] w-[30%]">
                        <div className="bg-indigo-800 rounded-lg w-[92%] h-[24%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <Image
                            src="/capabilities.png"
                            alt="Capabilities"
                            className="block h-6 w-6 mr-2"
                            width={24}
                            height={24}
                            style={{
                              imageRendering: "auto",
                            }}
                          />
                          <p className="text-gray-200">Capabilities</p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Quix has access to the internet, generating relevant
                            videos and websites
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Quix is interactive and can overcome challenges
                            inspecific or overly specific prompt
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Quix is extremely personalized and can adapt to the
                            age of the user and their pace of learning
                          </p>
                        </div>
                      </div>
                      <div className="ml-[2.5%] mr-[2.5%] border-[1px] border-[#63567d88] rounded-lg h-[23rem] w-[30%]">
                        <div className="bg-indigo-800 rounded-lg w-[92%] h-[24%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <Image
                            src="/limitations.png"
                            alt="Limitations"
                            className="block h-6 w-6 mr-2"
                            width={24}
                            height={24}
                            style={{
                              imageRendering: "auto",
                            }}
                          />
                          <p className="text-gray-200">Limitations</p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Knowledge of current events is limited, and Quix may
                            not recognize events within the past year.
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Examples
                          </p>
                        </div>
                        <div className="bg-[#221e2cf6] rounded-lg w-[92%] h-[20%] ml-[4%] mr-[4%] mt-[0.74rem] flex items-center justify-center text-center">
                          <p className="text-gray-200 text-[0.5rem] sm:text-[0.7rem] px-2">
                            Examples
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`message-bar ${
                    spaceClicked ? "flex" : "hidden"
                  } flex-col right-0 relative bottom-0 mt-auto pb-4`}
                >
                  <div className="flex justify-start items-end">
                    <button
                      data-dropdown-toggle="dropdownDivider"
                      className={`text-gray-200 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200 lg:text-base font-semibold rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-center z-40 ml-[17%] lg:ml-[15.45%] w-[12%] ${
                        open ? "sm:w-[11%]" : "sm:w-[9%]"
                      } h-9 mb-[0.125rem] sm:text-base xs:text-sm text-xs`}
                      type="button"
                      onClick={() => toggleDropdown("Mode")}
                    >
                      {mode}
                      <svg
                        className={`hidden w-0 h-0 ms-0 xl:block xl:w-2 xl:h-2 xl:ms-3 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      className={`z-10 ${
                        isOpen ? "block" : "hidden"
                      } bg-[#221e2cf6] divide-y divide-[#63567d88] border-[1px] border-[#63567d88] rounded-lg shadow z-40 ${
                        open
                          ? "w-[12%] ml-[-12%] sm:w-[11%] sm:ml-[-11%]"
                          : "w-[12%] ml-[-12%] sm:w-[9%] sm:ml-[-9%]"
                      } mt-[-10rem] mb-[3rem]`}
                    >
                      <div className="py-2">
                        <a
                          href="#"
                          className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#2a2638] transition-colors duration-200"
                          onClick={() => toggleDropdown("Learn")}
                        >
                          Learn
                        </a>
                      </div>
                      <div className="py-2">
                        <a
                          href="#"
                          className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-200 hover:bg-[#2a2638] transition-colors duration-200"
                          onClick={() => toggleDropdown("Quiz")}
                        >
                          Quiz
                        </a>
                      </div>
                      {/* <ul className="py-2 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-700" aria-labelledby="dropdownDividerButton">
                                    <li>
                                        <a href="#" className="block py-2 hover:bg-gray-300" onClick={() => toggleDropdown('Video')}>
                                            Video
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 hover:bg-gray-300" onClick={() => toggleDropdown('Document')}>
                                            Document
                                        </a>
                                    </li>
                                </ul> */}
                    </div>
                  </div>

                  <div className="flex justify-center items-end">
                    <input
                      type="text"
                      id="first_name"
                      className={`bg-[#221e2cf6] border-[1px] border-[#63567d88] text-gray-200 text-xs sm:text-sm rounded-lg block w-[67%] lg:w-[70%] p-2.5 pl-[13%] pr-[13%] mt-[-2.6rem] h-[2.75rem]`}
                      placeholder="Topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  {/* ml-[1.7svw] md:ml-[-0.25svw] lg:ml-[-0.25svw] */}
                  <div className="flex justify-end items-end">
                    <button
                      className={`flex items-center justify-center px-5 md:px-3 py-[0.625rem] md:py-[0.47rem] rounded-lg text-gray-200 bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200 font-semibold lg:text-[0.92rem] sm:text-sm text-xs w-[12%] ${
                        open ? "sm:w-[11%]" : "sm:w-[9%]"
                      } mt-[-2.7rem] mr-[17%] lg:mr-[15.45%] h-9 mb-1 cursor-pointer`}
                      onClick={
                        topic
                          ? mode === "Quiz"
                            ? generateQuestions
                            : learn
                          : undefined
                      }
                      disabled={!topic}
                    >
                      <Image
                        src="/enter.png"
                        alt="Enter"
                        className="block h-0 w-0 xs:h-3 xs:w-3 xs:mr-[0.35rem] sm:h-[0.825rem] sm:w-[0.825rem] sm:mr-2"
                        width={24}
                        height={24}
                        style={{
                          imageRendering: "auto",
                        }}
                      />
                      Enter
                    </button>
                  </div>
                  {/* ml-[45svw] sm:ml-[47svw] md:ml-[50svw] lg:ml-[53svw] mr-[-7rem] h-[5.5svh] */}
                </div>
              </div>
              <div
                className={`${
                  popupVisibility ? "block" : "hidden"
                } markdown-styling relative z-50 ml-[calc(100svw-42%-1rem)] ${
                  open
                    ? "mt-[calc(-100svh+16.6rem)]"
                    : "mt-[calc(-100svh+15.6rem)]"
                } popup-container h-[32.2rem] w-[42%] bg-[#221e2cf6] border-[#63567d88] border-[1px] text-gray-200 font-poppins rounded-lg overflow-y-auto`}
              >
                <div className="absolute flex flex-col w-full h-[10%] bg-[#2a2638] rounded-t-lg justify-center text-center text-xl font-bold">
                  <p>Document</p>
                  <XMarkIcon
                    className="absolute top-0 right-0 p-2 w-[2.375rem] h-[2.375rem] text-red-700 hover:cursor-pointer"
                    onClick={() => {
                      setPopupVisibility(!popupVisibility);
                    }}
                  ></XMarkIcon>
                </div>
                <MathJaxContext config={config}>
                  <MathJax>
                    <Markdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex, rehypeRaw]}
                      className="popup mt-[calc(15%-1rem)] px-5 py-2"
                    >
                      {popupContent}
                    </Markdown>
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
          </main>
        </div>

        {/* <div className="h-screen bg-gray-200 w-[20%] ml-0 mt-0">
            <div className="bg-gray-300 rounded-lg">
                <p>Add a Topic</p>
            </div>
        </div> */}
      </div>
    </main>
  );
}
