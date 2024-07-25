import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin/AdminPage.css';

function AdminPage() {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/admin-createevent');
  };

  return (
    <div className="admin-landing-page">
      <h1>Admin Dashboard</h1>
      <button className="create-event-button" onClick={handleCreateEvent}>
        Create Event
      </button>
      {/* Add more admin functionalities here */}
    </div>
  );
}

export default AdminPage;
