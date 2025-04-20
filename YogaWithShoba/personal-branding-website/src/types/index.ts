export interface ClassBooking {
    id: string;
    classId: string;
    userId: string;
    date: string;
    time: string;
}

export interface Schedule {
    id: string;
    className: string;
    instructor: string;
    date: string;
    time: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
}

export interface Video {
    id: string;
    title: string;
    url: string;
    description?: string;
}