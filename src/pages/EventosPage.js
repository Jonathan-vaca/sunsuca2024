import React from 'react';
import { useEvents } from '../contexts/EventContext';

const EventosPage = () => {
  const { events } = useEvents();

  return (
    <section>
      <h1>Eventos Disponibles</h1>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            {event.image && <img src={event.image} alt={event.title} className="event-image" />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventosPage;
