import { useState } from "react";

import styles from "./tabs.module.css";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        {tabsContent.map((tabItem, index) => (
          <div
            className={`${styles.tab_item} ${
              currentTabIndex === index ? styles.active : ""
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.content} style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
