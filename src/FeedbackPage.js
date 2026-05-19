import { useState } from "react";

function FeedbackPage() {

  const [message, setMessage] = useState("");

  const sendFeedback = async () => {

    await fetch("https://your-backend.com/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    alert("Feedback sent!");
    setMessage("");
  };

  return (
    <div className="feedback-page">

      <h1>Send Feedback</h1>

      <textarea
        placeholder="Type your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendFeedback}>
        Send
      </button>

    </div>
  );
}

export default FeedbackPage;