import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateEvent.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

function CreateEvent() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: new Date(),
    description: '',
    bannerImage: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'bannerImage') {
      setNewEvent({
        ...newEvent,
        bannerImage: files[0],
      });
    } else {
      setNewEvent({
        ...newEvent,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date) => {
    setNewEvent({
      ...newEvent,
      date: date,
    });
  };

  const handleCreateEvent = async () => {
    const formData = new FormData();
    formData.append('title', newEvent.title);
    formData.append('date', newEvent.date.toISOString());
    formData.append('description', newEvent.description);
    if (newEvent.bannerImage) {
      formData.append('bannerImage', newEvent.bannerImage);
    }

    try {
      // Mock the response directly here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        navigate('/admin');
      }, 5000);
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setNewEvent({ title: '', date: new Date(), description: '', bannerImage: null });
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/events/${eventId}`);
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="content-box">
        <h2 className="ceheading">Create Event</h2>
        <label htmlFor="title">Enter the Title of the Event</label>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <label htmlFor="date" className="date-label">
          Enter the Date
          <DatePicker
            selected={newEvent.date}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
          />
        </label>
        <label htmlFor="description">Enter the Description</label>
        <textarea
          name="description"
          value={newEvent.description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <label htmlFor="bannerImage">Add the banner image</label>
        <input
          type="file"
          name="bannerImage"
          accept="image/*"
          onChange={handleChange}
        />
        <button onClick={handleCreateEvent}>Create Event</button>
      </div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            {event.bannerImage && (
              <img
                src={event.bannerImage}
                alt={event.title}
                style={{ width: '100px', height: 'auto' }}
              />
            )}
            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Event Created Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Event Created Successfully!</h2>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default CreateEvent;
