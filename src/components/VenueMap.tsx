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
              title="Wedding Venue Location"
              className="w-full h-96"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834456789!5m2!1sen!2sus"
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
                    123 Wedding Venue Street<br />
                    Beautiful City, ST 12345
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