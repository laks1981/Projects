import React, { useState } from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [classType, setClassType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here, such as API calls
        console.log('Booking submitted:', { name, email, classType, date, time });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book a Class</h2>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Class Type:</label>
                <select 
                    value={classType} 
                    onChange={(e) => setClassType(e.target.value)} 
                    required
                >
                    <option value="">Select a class</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Pilates">Pilates</option>
                    <option value="Dance">Dance</option>
                </select>
            </div>
            <div>
                <label>Date:</label>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Time:</label>
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;