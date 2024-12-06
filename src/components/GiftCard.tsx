import React, { useState } from 'react';

interface GiftCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  paymentDetails: string;
}

export function GiftCard({ title, description, price, image, paymentDetails }: GiftCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-1000 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full rounded-xl shadow-xl overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-2xl font-bold text-pink-600">${price.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full rounded-xl shadow-xl bg-pink-50 p-6">
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            <p className="text-gray-600 whitespace-pre-line">{paymentDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
}