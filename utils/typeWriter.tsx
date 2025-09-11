import { useEffect, useState } from "preact/hooks";

export const useTypeWriter = (
  fullText: string,
  typingSpeed: number,
) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const hasTyped = sessionStorage.getItem("typewriter");
    let currentIndex = 0;

    if (hasTyped) {
      setDisplayText(fullText);
      return;
    }

    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);

        sessionStorage.setItem("typewriter", "true");
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [fullText, typingSpeed]);

  return displayText;
};
