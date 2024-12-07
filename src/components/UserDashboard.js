import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../contexts/EventContext';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { events, editEvent } = useEvents();  // Accessing events and editEvent from context

  const handleLogout = () => {
    navigate('/login');  // Redirect to login after logging out
  };

  const handleApplyForVacancy = (eventId) => {
    const event = events.find(e => e.id === eventId);
    if (event && event.isVacancy) {
      const currentUser = 'Current User'; // Replace with actual user data
      // Check if user has already applied
      if (event.applicants.includes(currentUser)) {
        event.applicants = event.applicants.filter(applicant => applicant !== currentUser); // Remove user
      } else {
        event.applicants = event.applicants || [];
        event.applicants.push(currentUser); // Add user to applicants
      }
      editEvent(event); // Update event in context
    }
  };

  return (
    <div className="user-dashboard">
      <h1>Panel de Usuario</h1>
      <p>Bienvenido a tu panel, aquí puedes gestionar tus eventos y ver tu información.</p>

      {/* Section for available events */}
      <section>
        <h2>Eventos Disponibles</h2>
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-card">
              {event.image && <img src={event.image} alt={event.title} className="event-image" />}
              <h3>{event.title}</h3>
              <p>{event.description}</p>

              {/* Show "Apply/Unapply for Vacancy" button */}
              {event.isVacancy && (
                <button onClick={() => handleApplyForVacancy(event.id)}>
                  {event.applicants && event.applicants.includes('Current User') ? 'Desaplicar' : 'Aplicar para vacante'}
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Logout Button */}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserDashboard;
