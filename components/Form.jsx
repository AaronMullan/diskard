import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { addData } from '../utils/dataUtils';

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addData({
      email: formData.email,
      firstName: formData.firstname,
      lastName: formData.lastname,
      message: formData.message,
    });
    setTimeout(() => {
      window.location.href = '/contacts/';
    }, '1000');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div style={{
        width: '100%',
        maxWidth: '600px',
        color: '#525254',
        padding: '4rem',
        h1: { fontsize: '31px' },
        backgroundColor: '#ffffff',
      }}
      >
        <h1>Get in touch</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '2rem' }}>
            <Input name="firstname" type="text" onChange={handleChange} />
            <Input name="lastname" type="text" onChange={handleChange} />
            <Input name="email" type="text" onChange={handleChange} />
            <Input name="message" type="textarea" onChange={handleChange} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" buttonText="send" />
          </div>
        </form>
      </div>
    </div>

  );
}
