import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
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
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [
      ...chatHistory,
      { role: "user", text: input },
      { role: "model", text: t('chatbot.thinking') },
    ];

    setChatHistory(newHistory);
    setInput("");
    await generateBotResponse(newHistory);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 p-3">
      <div className="flex-1 min-w-0">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-12 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 min-h-[40px] max-h-[120px]"
          rows={1}
          style={{ 
            height: 'auto',
            overflowY: 'auto'
          }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!input.trim()}
        className="flex-shrink-0 bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed h-[40px] w-[40px] flex items-center justify-center"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatForm;