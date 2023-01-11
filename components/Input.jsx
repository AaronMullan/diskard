import React, { useState } from 'react';

export default function Input({ type, name, onChange }) {
  const [value, setValue] = useState('');
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  return (
    <>
      <label htmlFor={name} style={{ color: '#525254', padding: '10px 0 5px' }}>{capitalizedName}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(name, e.target.value);
        }}
        style={{
          border: '1px solid #D6D4D5',
          borderRadius: '6px',
          padding: '14px 12px',
        }}
      />
    </>
  );
}
