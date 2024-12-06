import React, { useState } from 'react';
import { useEvents } from '../contexts/EventContext';

const DashboardPage = () => {
  const { events, addEvent, editEvent, deleteEvent } = useEvents();
  const [newEvent, setNewEvent] = useState({ title: '', description: '', image: '' });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewEvent((prevEvent) => ({
          ...prevEvent,
          image: reader.result, // Imagen cargada como base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.description) {
      alert('Por favor complete los campos obligatorios.');
      return;
    }
    addEvent({ ...newEvent, id: events.length + 1 });
    setNewEvent({ title: '', description: '', image: '' });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setNewEvent({ title: event.title, description: event.description, image: event.image || '' });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    editEvent({ ...editingEvent, ...newEvent });
    setEditingEvent(null);
    setNewEvent({ title: '', description: '', image: '' });
  };

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <section>
      <h1>Bienvenido al Dashboard de Administrador</h1>
      <h2>{editingEvent ? 'Editar Evento' : 'Agregar Nuevo Evento'}</h2>
      <form onSubmit={editingEvent ? handleSaveEdit : handleAdd}>
        <div>
          <label htmlFor="title">Título del Evento:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            placeholder="Título del evento"
          />
        </div>

        <div>
          <label htmlFor="description">Descripción del Evento:</label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            placeholder="Descripción del evento"
          ></textarea>
        </div>

        <div>
          <label htmlFor="image-url">Imagen por URL (opcional):</label>
          <input
            type="text"
            id="image-url"
            name="image"
            value={newEvent.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>

        <div>
          <label htmlFor="image-file">O subir imagen desde dispositivo (opcional):</label>
          <input
            type="file"
            id="image-file"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button type="submit">{editingEvent ? 'Guardar Cambios' : 'Agregar Evento'}</button>
      </form>

      <h2>Eventos actuales</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="event-card">
            {event.image && <img src={event.image} alt={event.title} className="event-image" />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)}>Editar</button>
            <button onClick={() => handleDelete(event.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DashboardPage;
