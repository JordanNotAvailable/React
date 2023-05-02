import React from 'react';
import './ChatStyle.css';

export default function ChatStyle() {
  return (
    <div className="chat-nav-container">
      <div className="relative w-full max-w-lg">
        <div className="blob blob-purple animate-blob"></div>
        <div className="blob blob-yellow animate-blob animation-delay-2000"></div>
        <div className="blob blob-pink animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4"></div>
      </div>
    </div>
  );
}