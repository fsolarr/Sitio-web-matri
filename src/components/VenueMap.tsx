import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function VenueMap() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Venue Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Ubicación del Matrimonio: Santo Pez Marbella"
              className="w-full h-96"
              frameBorder="0"
              src="https://www.google.com/maps/place/Club+House+Marbella/@-32.6602859,-71.4337882,17z/data=!3m1!4b1!4m6!3m5!1s0x9689b96d3065c9b1:0x475865a740397b11!8m2!3d-32.6602859!4d-71.4312133!16s%2Fg%2F11h5v90t54?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Getting There</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-pink-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-gray-600">
                    Santo Pez<br />
                    Condominio Marbella, Puchuncaví
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-pink-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-pink-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">venue@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}