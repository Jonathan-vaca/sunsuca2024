import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../contexts/EventContext';

const AdminDashboard = () => {
  const { events, addEvent, editEvent, deleteEvent } = useEvents();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', image: '', isVacancy: false });
  const [editingEvent, setEditingEvent] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); // Store current user info
  const navigate = useNavigate();

  useEffect(() => {
    // Get users and current user from localStorage
    const savedUsers = localStorage.getItem('users');
    const currentUserData = localStorage.getItem('currentUser');
    
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    if (currentUserData) {
      setCurrentUser(JSON.parse(currentUserData));
    }
    setLoading(false);
  }, []);

  const handleRoleChange = (username, newRole) => {
    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

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
          image: reader.result,
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
    addEvent({ ...newEvent, id: events.length + 1, applicants: [] });
    setNewEvent({ title: '', description: '', image: '', isVacancy: false });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setNewEvent({ title: event.title, description: event.description, image: event.image || '', isVacancy: event.isVacancy });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    editEvent({ ...editingEvent, ...newEvent });
    setEditingEvent(null);
    setNewEvent({ title: '', description: '', image: '', isVacancy: false });
  };

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  const handleApplyForVacancy = (eventId) => {
    if (currentUser && currentUser.role === 'user') {
      const event = events.find((e) => e.id === eventId);
      if (event && event.isVacancy) {
        event.applicants.push(currentUser.username); // Add current user to applicants
        editEvent({ ...event });
      }
    } else {
      alert("Solo los usuarios pueden postularse a vacantes.");
    }
  };

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="page-container">
      <h1>Panel de Administración</h1>

      {/* Gestión de Roles de Usuarios */}
      <div className="user-management-container">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="expand-button"
        >
          {isExpanded ? 'Ocultar Gestión de Usuarios' : 'Mostrar Gestión de Usuarios'}
        </button>
        {isExpanded && (
          <div className="user-table">
            <h2>Gestión de Usuarios</h2>
            <table>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleRoleChange(user.username, user.role === 'admin' ? 'user' : 'admin')
                        }
                      >
                        {user.role === 'admin' ? 'Convertir a Usuario' : 'Convertir a Admin'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Gestión de Eventos */}
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

        <div>
          <label htmlFor="vacancy">Marcar como Vacante:</label>
          <input
            type="checkbox"
            id="vacancy"
            name="isVacancy"
            checked={newEvent.isVacancy}
            onChange={() => setNewEvent((prevEvent) => ({ ...prevEvent, isVacancy: !prevEvent.isVacancy }))}
          />
        </div>

        <button type="submit">{editingEvent ? 'Guardar Cambios' : 'Agregar Evento'}</button>
      </form>

      <h2>Eventos actuales</h2>
      <ul>
        {events.map((event) => (
          <li
            key={event.id}
            className={`event-card ${event.isVacancy ? 'vacancy' : ''}`}
          >
            {event.image && <img src={event.image} alt={event.title} className="event-image" />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.isVacancy && currentUser && currentUser.role === 'user' && (
              <button onClick={() => handleApplyForVacancy(event.id)}>Aplicar para vacante</button>
            )}
            <p>
              {event.isVacancy && event.applicants.length > 0 && (
                <strong>Aplicantes: {event.applicants.join(', ')}</strong>
              )}
            </p>
            <button onClick={() => handleEdit(event)}>Editar</button>
            <button onClick={() => handleDelete(event.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
