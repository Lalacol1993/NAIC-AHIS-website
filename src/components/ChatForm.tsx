import { useRef, KeyboardEvent } from "react";
import { useTranslation } from 'react-i18next';

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
  placeholder: string;
}

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse, placeholder }: ChatFormProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useTranslation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    
    if (!userMessage) return;
    
    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.style.height = '40px';
    }

    // Update chat history with the user's message
    const newUserMessage: ChatMessage = { role: "user", text: userMessage };
    setChatHistory(history => [...history, newUserMessage]);

    // Add thinking message after a short delay
    setTimeout(() => {
      setChatHistory(history => [...history, { role: "model", text: t('chatbot.thinking') }]);
      
      // Generate bot response
      generateBotResponse([
        ...chatHistory,
        newUserMessage,
        { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }
      ]);
    }, 600);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleFormSubmit(e);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const lineHeight = parseInt(getComputedStyle(target).lineHeight);
    const minHeight = 40;
    const maxHeight = 120;
    
    // Reset height to auto to get the correct scrollHeight
    target.style.height = 'auto';
    
    // Calculate the new height based on content
    const newHeight = Math.min(Math.max(target.scrollHeight, minHeight), maxHeight);
    
    // Only update height if it's different from current height
    if (Math.abs(newHeight - target.offsetHeight) >= lineHeight) {
      target.style.height = `${newHeight}px`;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center gap-2 p-3">
      <div className="flex-1 min-w-0">
        <textarea
          ref={inputRef}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-12 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none overflow-hidden"
          style={{ height: '40px' }}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          aria-label="Chat message"
        />
      </div>
      <button 
        type="submit" 
        className="flex-shrink-0 bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors h-[40px] w-[40px] flex items-center justify-center"
        aria-label="Send message"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ChatForm;