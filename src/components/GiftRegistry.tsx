import React from 'react';
import { GiftCard } from './GiftCard';

const gifts = [
  {
    title: 'European Adventure',
    description: 'Help us explore the romantic cities of Europe on our honeymoon!',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80',
    paymentDetails: 'Bank: Example Bank\nAccount: 1234-5678-9012\nReference: Europe Trip',
  },
  {
    title: 'Dream Home Fund',
    description: 'Contribute to our future home together.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    paymentDetails: 'Bank: Example Bank\nAccount: 1234-5678-9012\nReference: Home Fund',
  },
  // Add more gifts as needed
];

export function GiftRegistry() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gift Registry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <GiftCard key={index} {...gift} />
          ))}
        </div>
      </div>
    </div>
  );
}