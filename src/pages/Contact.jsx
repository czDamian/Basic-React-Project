import React from "react";
import { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username != "") {
      setSuccess("Message sent successfully");
      setError("");
      setEmail("");
      setMessage("");
      setUsername("");
    } else {
      setError("Invalid details. Failed to send message");
      setSuccess("");
    }
  }
  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }
  function messageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <section className="flex justify-center">
      <div className="mx-20 rounded-lg bg-black p-10 sp-form">
        <h1 className="text-center font-bold text-xl text-blue-600 mb-8">
          CONTACT FORM
        </h1>
        <div>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={usernameChange} value={username} />
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={emailChange} value={email} />
            <textarea
              onChange={messageChange}
              value={message}
              minLength={20}
              rows={4}
              placeholder="Enter your message here"
              spellCheck={false}
            />
            <br />
            <input type="submit" value="send message" />
            <p className="text-green-500">{success}</p>
            <p className="text-red-500">{error}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
