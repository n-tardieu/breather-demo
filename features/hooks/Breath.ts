// useBreath.js
import { useState, useEffect } from 'react';

const useBreath = (sessionDuration = 0) => {
    const [currentTime, setCurrentTime] = useState(1000);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResetting, setIsReset] = useState(false);
    const [isInspiration, setIsInspiration] = useState(true);

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (isPlaying) {
            let isFirstIteration = true;

            interval = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (prevTime >= sessionDuration) {
                        setIsPlaying(false);
                        clearInterval(interval);
                        return prevTime;
                    }

                    if (prevTime !== 0 && prevTime % 5000 === 0 && !isFirstIteration) {
                        setIsInspiration(prevInspiration => !prevInspiration);
                    }

                    if (isFirstIteration) {
                        isFirstIteration = false;
                    }

                    return prevTime + 1000;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isPlaying, sessionDuration]);

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const toggleReset = () => {
        setIsReset(prev => !prev)
        setIsInspiration(true)
        setCurrentTime(1000)
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
