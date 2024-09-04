import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [quote, setQuote] = useState('');

    const quotes = [
        "The mountains are calling, and I must go.",
        "Trail Running - It's not just exercise, it is an adventure.",
        "The best view comes after the hardest climb.",
        "Why to climb a mountain? Because it is there!"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 2000);// Change quote every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount

    }, []);


    return (
        <div className="home-container">
            <div className="welcome-message">
                <h1>Welcome to My Adventure Space!</h1>
                <p>Let's embark on a journey to explore the exhilarating worlds of mountaineering and trail running.</p>
                <p>{quote}</p>
            </div>
        </div>
    );
}

export default Home;