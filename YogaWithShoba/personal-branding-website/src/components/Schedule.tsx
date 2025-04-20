import React, { useEffect, useState } from 'react';
import { fetchSchedules } from '../utils/api';

// Define a type for the schedule items
interface ScheduleItem {
    title: string;
    date: string;
    time: string;
}

const Schedule: React.FC = () => {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSchedules();
            setSchedule(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Class Schedule</h2>
            <ul>
                {schedule.map((classItem, index) => (
                    <li key={index}>
                        <strong>{classItem.title}</strong> - {classItem.date} at {classItem.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;