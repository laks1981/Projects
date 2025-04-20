# Personal Branding Website

This project is a personal branding website designed to showcase classes, demo videos, and provide a platform for users to book classes and make payments. 

## Features

- **Booking Classes**: Users can easily book classes through a user-friendly booking form.
- **Class Schedules**: A dedicated schedule component displays available classes and their timings.
- **Demo Videos**: Showcase demo videos to give potential clients a preview of the classes offered.
- **Payment Integration**: Secure payment options for users to complete their bookings.

## Project Structure

```
personal-branding-website
├── public
│   ├── index.html
│   ├── styles
│   │   └── main.css
│   └── scripts
│       └── main.js
├── src
│   ├── components
│   │   ├── BookingForm.tsx
│   │   ├── Schedule.tsx
│   │   ├── DemoVideos.tsx
│   │   └── PaymentIntegration.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Classes.tsx
│   │   └── Contact.tsx
│   ├── utils
│   │   └── api.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-branding-website
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

- Visit the home page to learn more about the brand.
- Navigate to the Classes page to view available classes and book them.
- Check the About page for personal stories and achievements.
- Use the Contact page to reach out for inquiries.

## License

This project is licensed under the MIT License.