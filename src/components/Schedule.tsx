import React from 'react';
import { Clock } from 'lucide-react';

const events = [
  {
    time: '3:00 PM',
    title: 'Ceremony',
    description: 'Join us as we exchange vows in the garden',
  },
  {
    time: '4:30 PM',
    title: 'Cocktail Hour',
    description: 'Enjoy drinks and hors d\'oeuvres on the terrace',
  },
  {
    time: '6:00 PM',
    title: 'Reception & Dinner',
    description: 'Celebrate with dinner, dancing, and festivities',
  },
  {
    time: '11:00 PM',
    title: 'Farewell',
    description: 'Send off the newlyweds with love and best wishes',
  },
];

export function Schedule() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wedding Day Schedule</h2>
        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{event.time}</h3>
                <h4 className="text-lg font-semibold text-pink-600 mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}