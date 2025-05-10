import { useRef } from "react";

interface ChatMessage {
  role: "user" | "model";
  text: string;
  hideInChat?: boolean;
  isError?: boolean;
}

interface ChatFormProps {
  chatHistory: ChatMessage[];
  setChatHistory: (history: ChatMessage[]) => void;
  generateBotResponse: (history: ChatMessage[]) => Promise<void>;
}

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }: ChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    
    if (!userMessage) return;
    
    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Update chat history with the user's message
    const newUserMessage: ChatMessage = { role: "user", text: userMessage };
    setChatHistory(history => [...history, newUserMessage]);

    // Add thinking message after a short delay
    setTimeout(() => {
      setChatHistory(history => [...history, { role: "model", text: "Thinking..." }]);
      
      // Generate bot response
      generateBotResponse([
        ...chatHistory,
        newUserMessage,
        { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }
      ]);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message..."
        className="message-input"
        aria-label="Chat message"
      />
      <button type="submit" id="send-message" aria-label="Send message">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ChatForm;