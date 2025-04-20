document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const scheduleContainer = document.getElementById('schedule');
    const demoVideosContainer = document.getElementById('demo-videos');

    // Function to handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(bookingForm);
        // Process the form data (e.g., send to API)
        console.log('Form submitted:', Object.fromEntries(formData));
    });

    // Function to fetch and display schedule
    function fetchSchedule() {
        // Simulated fetch call
        const scheduleData = [
            { time: '10:00 AM', class: 'Yoga' },
            { time: '11:00 AM', class: 'Pilates' },
            { time: '12:00 PM', class: 'Zumba' }
        ];
        scheduleData.forEach(item => {
            const scheduleItem = document.createElement('div');
            scheduleItem.textContent = `${item.time} - ${item.class}`;
            scheduleContainer.appendChild(scheduleItem);
        });
    }

    // Function to fetch and display demo videos
    function fetchDemoVideos() {
        // Simulated video data
        const videoData = [
            { title: 'Yoga Basics', url: 'https://www.example.com/yoga-basics' },
            { title: 'Pilates for Beginners', url: 'https://www.example.com/pilates-beginners' }
        ];
        videoData.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a>`;
            demoVideosContainer.appendChild(videoItem);
        });
    }

    // Initial function calls
    fetchSchedule();
    fetchDemoVideos();
});