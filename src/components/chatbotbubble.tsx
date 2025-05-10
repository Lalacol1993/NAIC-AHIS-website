import React from 'react';
import { ChatBot } from '@ebereplenty/chatbot';

const ChatbotBubble = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      <ChatBot
        title="NAIC Chatbot"
        prompt="Hello, how can I assist you today?"
        iconColor="#007bff"
        headerColor="#004080"
      />
    </div>
  );
};

export default ChatbotBubble;
