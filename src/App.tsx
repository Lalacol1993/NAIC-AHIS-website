import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { aiTuning } from "./AItuning";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import { useTranslation } from 'react-i18next';
import './i18n';

interface ChatMessage {
  hideInChat?: boolean;
  role: "model" | "user";
  text: string;
  isError?: boolean;
}

interface ChatHistory extends Array<ChatMessage> {}

const App = () => {
  const { t, i18n } = useTranslation();
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatHistory>([
    {
      hideInChat: true,
      role: "model",
      text: aiTuning,
    },
  ]);

  const generateBotResponse = async (history: ChatHistory) => {
    const updateHistory = (text: string, isError = false) => {
      setChatHistory((prev: ChatHistory) => [
        ...prev.filter((msg: ChatMessage) => msg.text !== t('chatbot.thinking')),
        { role: "model", text, isError },
      ]);
    };

    const formattedHistory = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept-Language": i18n.language
      },
      body: JSON.stringify({ 
        contents: formattedHistory
      }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL as string, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error.message || t('chatbot.error'));
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error: any) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-secondary-800">
      <Header />
      <main className="text-lg">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />

      {/* Chatbot Floating Button */}
      <button 
        onClick={() => setShowChatbot(!showChatbot)} 
        className="fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        {showChatbot ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-[350px] bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden z-50">
          <div className="bg-primary-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ChatbotIcon />
              <h2 className="font-semibold">{t('chatbot.title')}</h2>
            </div>
            <button onClick={() => setShowChatbot(false)} className="hover:bg-primary-700 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">{t('chatbot.welcome')}</p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="chat-footer">
            <ChatForm 
              chatHistory={chatHistory} 
              setChatHistory={setChatHistory} 
              generateBotResponse={generateBotResponse}
              placeholder={t('chatbot.inputPlaceholder')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;