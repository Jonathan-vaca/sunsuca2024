import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para los eventos
const EventContext = createContext();

// Proveedor de contexto
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento 1", description: "Descripción del evento 1" },
    { id: 2, title: "Evento 2", description: "Descripción del evento 2" },
  ]);

  // Función para agregar un evento
  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  // Función para editar un evento
  const editEvent = (editedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === editedEvent.id ? editedEvent : event
      )
    );
  };

  // Función para eliminar un evento
  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useEvents = () => {
  return useContext(EventContext);
};
