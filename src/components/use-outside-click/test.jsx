import { useState } from "react";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
