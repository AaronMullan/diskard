import React from 'react';
import Button from './Button';

function Input({ type, name }) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  return (
    <>
      <label htmlFor={name} style={{ color: '#525254' }}>{capitalizedName}</label>
      <input
        type={type}
        name={name}
        style={{
          border: '1px solid #D6D4D5',
          borderRadius: '6px',
          padding: '14px 12px',
          height: type === 'textarea' ? '200px' : null,
        }}
      />
    </>
  );
}

export default function Form() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    console.log('hello', event);
    // Get data from the form.
    const data = {
      name: event.target.name.value,
      // last: event.target.last.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  const unsubmit = (event) => {
    event.preventDefault();
    alert('unsubmit');
    console.log('unsubmit');
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <div style={{
        width: '100%', maxWidth: '600px', color: '#525254', padding: '4rem', h1: { fontsize: '31px' },
      }}
      >
        <h1>Get in touch</h1>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '2rem' }}>
            <Input name="name" type="text" />
            <Input name="email" type="text" />
            <Input name="subject" type="text" />
            <Input name="how can we help" type="textarea" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" buttonText="send" onSubmit={unsubmit} />
          </div>
        </form>
      </div>
    </div>

  );
}
