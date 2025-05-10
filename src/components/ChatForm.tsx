import { useRef } from "react";

interface ChatFormProps {
  chatHistory: Array<{ role: string; text: string }>;
  setChatHistory: (history: Array<{ role: string; text: string }>) => void;
  generateBotResponse: (history: Array<{ role: string; text: string }>) => void;
}

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }: ChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    
    if (!userMessage) return;
    
    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    // Delay 600ms before showing "Thinking..." and generating response
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      
      // Call the function to generate the bot's response
      generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        className="message-input"
      />
      <button type="submit" id="send-message">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ChatForm;