import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser ? "the__user" : "the__guest"}`}>
      <h4>
        {!isUser && `${message.username || "Unknown user"}: `} {message.message}
      </h4>
    </div>
  );
});

export default Message;
