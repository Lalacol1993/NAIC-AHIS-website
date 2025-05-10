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
  const chatBodyRef = useRef(null);
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

    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error?.message || "Something went wrong!");
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-secondary-800 relative">
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

      {/* Toggle Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <span className="material-symbols-rounded">{showChatbot ? "close" : "mode_comment"}</span>
      </button>

      {/* Chatbot UI */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-[350px] bg-white border border-gray-300 shadow-xl rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <div className="flex items-center gap-2">
              <ChatbotIcon />
              <h2 className="font-semibold text-lg">Chatbot</h2>
            </div>
            <button onClick={() => setShowChatbot(false)} className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>

          {/* Body */}
          <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-3 max-h-80">
            <div className="flex gap-2 mb-3 items-start">
              <ChatbotIcon />
              <p>Hey there!<br />How can I help you today?</p>
            </div>
            {chatHistory.map((chat, index) =>
              chat.hideInChat ? null : <ChatMessage key={index} chat={chat} />
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-3">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

