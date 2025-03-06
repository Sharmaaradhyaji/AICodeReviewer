import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(`function add(a, b) {
    return a + b;
  }`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Dark mode state

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      setReview("❌ Error fetching review. Please try again.");
    }
    setLoading(false);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(review);
    alert("✅ Review copied to clipboard!");
  }

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <header>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ccc",
                borderRadius: 4,
                width: "100%",
                height: "100%",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            {loading ? "⏳ Waiting..." : "Review"}
          </div>
        </div>

        <div className="right">
          {loading ? (
            <p>⏳ Analyzing your code...</p>
          ) : (
            <>
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
              {review && (
                <button onClick={copyToClipboard} className="copy-btn">
                  📋 Copy Review
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
