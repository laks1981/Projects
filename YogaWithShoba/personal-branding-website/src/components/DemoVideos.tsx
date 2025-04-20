import React, { useEffect, useState } from 'react';

const DemoVideos: React.FC = () => {
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/videos'); // Replace with your API endpoint
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="demo-videos">
            <h2>Demo Videos</h2>
            <div className="video-list">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <h3>{video.title}</h3>
                        <iframe
                            width="560"
                            height="315"
                            src={video.url}
                            title={video.title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoVideos;