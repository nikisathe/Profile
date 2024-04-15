
import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    description: '',
    file: '',
    createdby: '',
    filename: '' // Add filename field to state
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
      filename: e.target.files[0].name // Capture filename when file is selected
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('deadline', formData.deadline);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('file', formData.file);
    formDataToSend.append('createdby', formData.createdby);
    formDataToSend.append('filename', formData.filename); // Append filename to FormData

    try {
      await axios.post('http://localhost:3001/assignment', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Assignment submitted successfully');
      setFormData({
        title: '',
        deadline: '',
        description: '',
        file: '',
        createdby: '',
        filename: '' // Clear filename after submission
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <br /><br />

        <label htmlFor="deadline">Deadline:</label>
        <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} />
        <br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        <br /><br />

        <label htmlFor="file">File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
        <br /><br />

        <label htmlFor="filename">Filename:</label> {/* Add filename field */}
        <input type="text" id="filename" name="filename" value={formData.filename} onChange={handleChange} />
        <br /><br />

        <label htmlFor="createdby">Created By:</label>
        <input type="text" id="createdby" name="createdby" value={formData.createdby} onChange={handleChange} />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TeacherForm;
