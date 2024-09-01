"use client";

import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "katex/dist/katex.min.css";

export default function Viewing() {
  // if (window.location.pathname == "/viewing" && !window.location.search) {
  //   window.location.href = "/dashboard";
  // }
  console.log(window.location.search, window.location.pathname);
  const document = decodeURIComponent(window.location.search.replace("?", ""));
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <main className="font-poppins">
      <div>
        <div className="markdown-styling text-gray-200 font-poppins px-10 pb-4">
          <MathJaxContext config={config}>
            <MathJax>
              <Markdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
              >
                {document}
              </Markdown>
            </MathJax>
          </MathJaxContext>
        </div>
      </div>
    </main>
  );
}
