import { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

const TypingAnimation = ({ words, className = "" }: TypingAnimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(75);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink border-r-2 border-primary ml-1">|</span>
    </span>
  );
};

export default TypingAnimation;