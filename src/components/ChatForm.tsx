import { useRef, KeyboardEvent, useState } from "react";
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
  const { t, i18n } = useTranslation();
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    
    if (!userMessage) return;
    
    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.style.height = '80px';
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
    const minHeight = 80;
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

  const toggleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert(t('chatbot.speechNotSupported'));
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    // Set language based on current i18n language
    const languageMap: { [key: string]: string } = {
      'en': 'en-US',
      'zh': 'zh-HK',
      'ms': 'ms-MY'
    };
    recognition.lang = languageMap[i18n.language] || 'en-US';

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsProcessing(true);
        
        // Stop recognition immediately after getting the result
        recognition.stop();
        setIsListening(false);
        
        // Add a small delay to show the loading animation
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.value = transcript;
            // Trigger input event to adjust height
            const inputEvent = new Event('input', { bubbles: true });
            inputRef.current.dispatchEvent(inputEvent);
          }
          setIsProcessing(false);
        }, 500);
      };

      recognition.onend = () => {
        // Only reset listening state if we're not processing
        if (!isProcessing) {
          setIsListening(false);
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setIsProcessing(false);
        // Show error message to user
        if (event.error === 'not-allowed') {
          alert(t('chatbot.microphonePermission'));
        } else if (event.error === 'no-speech') {
          alert(t('chatbot.noSpeechDetected'));
        } else {
          alert(t('chatbot.speechError'));
        }
      };
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center gap-2 p-3">
      <div className="flex-1 min-w-0 relative">
        <textarea
          ref={inputRef}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-24 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none overflow-hidden"
          style={{ height: '80px' }}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          aria-label="Chat message"
        />
        <button
          type="button"
          onClick={toggleSpeechRecognition}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 scale-110 shadow-lg shadow-red-500/30' 
              : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 hover:scale-105'
          }`}
          aria-label={isListening ? t('chatbot.stopListening') : t('chatbot.startListening')}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <svg className="animate-spin h-5 w-5 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isListening ? 'animate-pulse' : ''}`}
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
            </svg>
          )}
        </button>
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