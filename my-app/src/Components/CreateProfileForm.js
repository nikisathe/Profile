import React, { useState } from 'react';
import axios from 'axios';

const CreateProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    standard: '',
    roll_number: '',
    mobile_number: '',
    birth_date: '',
    email: '',
    profile_photo: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Please enter a name');
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await axios.post('http://localhost:3001/api/users', formDataToSend);
      alert('User profile created successfully!');
      setTimeout(() => {
        window.location.reload(); // Reload the page to fetch updated user list
      }, 1000);
    } catch (error) {
      alert('Error creating user profile');
      console.error(error);
    }
  };
  

  return (
    <div>
      <h2>Create User Profile</h2>
      <form onSubmit={handleSubmit}>
      
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="standard" value={formData.standard} onChange={handleChange} placeholder="Standard" />
        <input type="text" name="roll_number" value={formData.roll_number} onChange={handleChange} placeholder="Roll Number" />
        <input type="text" name="mobile_number" value={formData.mobile_number} onChange={handleChange} placeholder="Mobile Number" />
        <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} placeholder="Birth Date" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="file" name="profile_photo" onChange={handleChange} accept="image/*" />
        
  
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
