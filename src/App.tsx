import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./companyInfo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

const App = () => {
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error.message || "Something went wrong!");
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
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
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler" className="fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg">
        <span className="material-symbols-rounded">{showChatbot ? "close" : "mode_comment"}</span>
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="chatbot-popup fixed bottom-20 right-4 w-[350px] bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden z-50">
          <div className="chat-header flex justify-between items-center px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <ChatbotIcon />
              <h2 className="font-semibold">Chatbot</h2>
            </div>
            <button onClick={() => setShowChatbot(false)} className="material-symbols-rounded text-gray-600">
              keyboard_arrow_down
            </button>
          </div>

          <div ref={chatBodyRef} className="chat-body max-h-[300px] overflow-y-auto px-4 py-2">
            <div className="message bot-message flex gap-2 items-start mb-2">
              <ChatbotIcon />
              <p className="message-text">Hey there<br />How can I help you today?</p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="chat-footer border-t px-4 py-2">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

