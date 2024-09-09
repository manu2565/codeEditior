import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import "./App.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: red; }");
  const [jsCode, setJsCode] = useState("console.log('Hello World');");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${cssCode}</style>
          <body>${htmlCode}</body>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="app">
      <div className="editor-pane">
        <div className="editor">
          <h2>HTML</h2>
          <CodeMirror
            value={htmlCode}
            extensions={[html()]}
            onChange={(value) => setHtmlCode(value)}
            theme="dark"
          />
        </div>
        <div className="editor">
          <h2>CSS</h2>
          <CodeMirror
            value={cssCode}
            extensions={[css()]}
            onChange={(value) => setCssCode(value)}
            theme="dark"
          />
        </div>
        <div className="editor">
          <h2>JavaScript</h2>
          <CodeMirror
            value={jsCode}
            extensions={[javascript()]}
            onChange={(value) => setJsCode(value)}
            theme="dark"
          />
        </div>
      </div>
      <div className="preview-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;



  // return (
  //   <>
  //     {/* <div className="head_hello">
  //       <p>Hello</p>
  //       <div className="logins">
  //         <input className="username" type="text" placeholder="Username" />
  //         <input className="password" type="password" placeholder="Password" />

  //         <button>login</button>
  //       </div>
  //     </div> */}
  //   </>
  // );



