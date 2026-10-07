import { FormEvent, useEffect, useRef, useState } from "react";
import "./styles/ChatWidget.css";

type Message = { role: "user" | "assistant"; content: string };

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Kamran's AI assistant. Ask me about his experience, skills, or projects.",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <span>Ask about Kamran</span>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-panel-body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble-${m.role}`}>
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble chat-bubble-assistant chat-bubble-loading">
                <span />
                <span />
                <span />
              </div>
            )}
            {error && <div className="chat-error">{error}</div>}
          </div>
          <form className="chat-panel-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Chat message"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chat-toggle-btn"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? "×" : "Chat"}
      </button>
    </div>
  );
};

export default ChatWidget;
