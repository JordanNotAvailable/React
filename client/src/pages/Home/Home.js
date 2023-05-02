import React from "react";
import Header from "../../componets/Header/Header"
import ChatStyle from "../../componets/ChatStyle/ChatStyle";
import ChatNav from "../../componets/ChatNav/ChatNav";
import Gamebar from "../../componets/Gamebar/Gamebar";
import './Home.css';

const Home = () => {
  return (
    <div>
      <ChatStyle />
      <div>
        <Header />
        <Gamebar />
        <ChatNav />
      </div>
    </div>
  );
};

export default Home;