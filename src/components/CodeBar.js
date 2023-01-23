import React, { useState } from "react";
import styles from "./CodeBar.module.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default function CodeBar() {
  const [activeTab, setActiveTab] = useState("html");
  return <aside className={styles.codebar}>
    <nav className={styles.tab}>
        <button onClick={()=> setActiveTab('html')} className={`${styles.item} ${activeTab === 'html' && styles.activeTab}`}>HTML</button>
        <button onClick={()=> setActiveTab('css')} className={`${styles.item} ${activeTab === 'css' && styles.activeTab}`}>CSS</button>
        <button onClick={()=> setActiveTab('js')} className={`${styles.item} ${activeTab === 'js' && styles.activeTab}`}>JS</button>
    </nav>

    <AceEditor
        placeholder="Write your HTML codes here!"
        mode="html"
        theme="monokai"
        name="editor_html"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }} 
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }}
    />

  </aside>;
}
