import React, { useState, FormEvent } from 'react';

const BirthdayForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/birthday', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, dob }),
    });

    if (response.ok) {
      setMessage(`Thank you ${name}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-5">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Birthday Form
      </h2>
      <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-md px-8 py-6">
        <form onSubmit={handleSubmit}>
          <label className="text-gray-700 dark:text-gray-200">Name</label>
          <input className="mt-2 mb-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="text-gray-700 dark:text-gray-200">Date of Birth</label>
          <input className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit">Submit</button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default BirthdayForm;