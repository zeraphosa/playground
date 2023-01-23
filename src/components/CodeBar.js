import React, { useState } from "react";
import styles from "./CodeBar.module.css";
import CssEditor from "./Editor/CssEditor";

import HtmlEditor from "./Editor/HtmlEditor";
import JsEditor from "./Editor/JsEditor";

export default function CodeBar() {
  const [activeTab, setActiveTab] = useState("html");
  return (
    <aside className={styles.codebar}>
      <nav className={styles.tab}>
        <button onClick={() => setActiveTab("html")} className={`${styles.item} ${activeTab === "html" && styles.activeTab}`}>
          HTML
        </button>
        <button onClick={() => setActiveTab("css")} className={`${styles.item} ${activeTab === "css" && styles.activeTab}`}>
          CSS
        </button>
        <button onClick={() => setActiveTab("js")} className={`${styles.item} ${activeTab === "js" && styles.activeTab}`}>
          JS
        </button>
      </nav>

        {activeTab === 'html' && <HtmlEditor/>}
        {activeTab === 'css' && <CssEditor/>}
        {activeTab === 'js' && <JsEditor/>}
    </aside>
  );
}
