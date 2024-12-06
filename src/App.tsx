import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { Schedule } from './components/Schedule';
import { RSVP } from './components/RSVP';
import { GiftRegistry } from './components/GiftRegistry';
import { VenueMap } from './components/VenueMap';
import { Guestbook } from './components/Guestbook';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>

      <section id="countdown">
        <CountdownTimer />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="rsvp">
        <RSVP />
      </section>

      <section id="registry">
        <GiftRegistry />
      </section>

      <section id="venue">
        <VenueMap />
      </section>

      <section id="guestbook">
        <Guestbook />
      </section>
    </div>
  );
}

export default App;