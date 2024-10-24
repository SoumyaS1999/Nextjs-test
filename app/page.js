"use client"

import Header from "@/components/Header";
import { useState } from 'react';

export default function UserForm() {
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactMode: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Example of submitting form data
      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log('form submitted successfully');
      setFormData({
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactMode: '',
        agree: false
      });
      alert('Form submitted successfully!');


    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div>
    <Header />
    <form onSubmit={handleSubmit} className="w-96 mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-center font-bold text-2xl mb-6">Create New User</h2>
      <label className="block mb-2 font-bold">
        Roles
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-400 rounded-md"
        >
          <option class='font-semibold' value="">Applying For</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
      </label>
      <label className="block mb-2 font-bold">
        First Name
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-400 rounded-md"
        />
      </label>
      <label className="block mb-2 font-bold">
        Last Name
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-400 rounded-md"
        />
      </label>
      <label className="block mb-2 font-bold">
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-400 rounded-md"
        />
      </label>
      <label className="block mb-2 font-bold">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-400 rounded-md"
        />
      </label>
      <label className="block mb-4 font-bold">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mr-2"
        />
        I agree with the <a href="/terms" className="text-blue-500">Terms & Conditions</a>
      </label>
      <fieldset className="mb-4">
        <legend className="font-semibold mb-2">Preferable Mode Of Contact</legend>
        <label className="block mb-2">
          <input
            type="radio"
            name="contactMode"
            value="SMS"
            checked={formData.contactMode === 'SMS'}
            onChange={handleChange}
            className="mr-2"
          />
          SMS
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="contactMode"
            value="Email"
            checked={formData.contactMode === 'Email'}
            onChange={handleChange}
            className="mr-2"
          />
          Email
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            name="contactMode"
            value="Telephone"
            checked={formData.contactMode === 'Telephone'}
            onChange={handleChange}
            className="mr-2"
          />
          Telephone
        </label>
      </fieldset>
      <button type="submit" className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Submit Application
      </button>
    </form>
    </div>
  );
}

