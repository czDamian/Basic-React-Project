import React from "react";
import { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
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
        <h1 className="text-center font-bold text-xl underline mb-4">
          CONTACT FORM
        </h1>
        <div>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={usernameChange} value={username} />
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={emailChange} value={email} />
            <textarea onChange={messageChange} value={message} minLength={20} placeholder="enter your message" spellCheck={false}/>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
