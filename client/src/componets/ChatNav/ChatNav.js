import React from 'react';
import './ChatNav.css';

export default function ChatNav() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            {/* 
              You can add a logo here, or a Home button that redirects to the homepage.
            */}
          </div>
          <div className="button-group">
            <button>Create group</button>
            <button>Create chat</button>
            <button>Add user as friend</button>
          </div>
        </div>
        <div className="chat-list">
          <p>Chats linked to logged in user</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search group ID" />
        </div>
      </div>
    </>
  )
}