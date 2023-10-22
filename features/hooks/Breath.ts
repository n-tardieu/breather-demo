// useBreath.js
import { useState, useEffect } from 'react';

const useBreath = (sessionDuration = 0) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResetting, setIsReset] = useState(false);
    const [isInspiration, setIsInspiration] = useState(true);


    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (prevTime >= sessionDuration) {
                        setIsPlaying(false);
                        clearInterval(interval);
                        return prevTime;
                    }
                    return prevTime + 1000;
                });
                if (currentTime % 5000 === 0) { // Toutes les 5 secondes
                    setIsInspiration(prevInspiration => !prevInspiration);
                }
            }, 1000); // Chaque seconde
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isPlaying, currentTime]);

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const toggleReset = () => {
        setIsReset(prev => !prev)
        setCurrentTime(0)
    }

    return {
        currentTime,
        isPlaying,
        isResetting,
        isInspiration,
        togglePlay,
        toggleReset,
    };
};

export default useBreath;
