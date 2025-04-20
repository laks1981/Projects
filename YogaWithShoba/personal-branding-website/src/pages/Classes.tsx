import React from 'react';
import BookingForm from '../components/BookingForm';
import Schedule from '../components/Schedule';
import DemoVideos from '../components/DemoVideos';

const Classes: React.FC = () => {
    return (
        <div>
            <h1>Available Classes</h1>
            <Schedule />
            <BookingForm />
            <DemoVideos />
        </div>
    );
};

export default Classes;