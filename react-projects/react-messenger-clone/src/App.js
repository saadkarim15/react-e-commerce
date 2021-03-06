import "./App.css";
import { React, useState, useEffect } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("message").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    setUsername(prompt("What is your name"));
  }, []);

  useEffect(() => {
    db.collection("message")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {});

  return (
    <div className="app">
      <div className="title__user">
        <h1>Messenger</h1>
        <h2>Welcome {username}</h2>
      </div>
      <div className="message__container">
        <FlipMove className="flip__container">
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
      <div className="inputs__container">
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" disabled={!input} onClick={sendMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
