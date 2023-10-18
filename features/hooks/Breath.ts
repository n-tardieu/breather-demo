// useBreath.js
import { useState, useEffect } from 'react';

const useBreath = (initialTime = 0) => {
    const [currentTime, setCurrentTime] = useState(initialTime);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResetting, setIsReset] = useState(false);

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prevTime => prevTime + 1000); // Mettre à jour toutes les secondes (1000ms)
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const toggleReset = () => {
        setIsReset(prev => !prev)
    }

    return {
        currentTime,
        isPlaying,
        isResetting,
        togglePlay,
        toggleReset,
    };
};

export default useBreath;
