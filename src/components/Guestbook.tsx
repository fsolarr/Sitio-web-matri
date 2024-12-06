import React, { useState } from 'react';

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
}

export function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      setMessages([
        {
          id: Date.now(),
          name: newMessage.name,
          message: newMessage.message,
          date: new Date().toLocaleDateString(),
        },
        ...messages,
      ]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Guestbook</h2>
        
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={newMessage.name}
              onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              value={newMessage.message}
              onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
          >
            Leave a Message
          </button>
        </form>

        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-pink-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{msg.name}</h3>
                <span className="text-sm text-gray-500">{msg.date}</span>
              </div>
              <p className="text-gray-700">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}