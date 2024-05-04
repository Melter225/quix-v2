import React, { useState, useEffect } from 'react';

const Logic = ({ mappingArray }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const styleElement = document.createElement('style');
        let css = '';

        mappingArray.forEach(value => {
            css += `
                .star-animation-${value} { 
                    animation: moveStar${value} ${getRandomInt(10, 20)}s infinite alternate linear; 
                }

                @keyframes moveStar${value} { 
                    from { 
                        transform: translate(${x}px, ${y}px);
                    } 
                    to { 
                        transform: translate(${x}px, ${y}px); 
                    } 
                }
            `;
        });

        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [mappingArray, x, y]);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            const sensitivity = 5; // Adjust sensitivity as needed
            setX((e.clientX) / sensitivity);
            setY((e.clientY) / sensitivity);
        };
        
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null;
};

export default Logic;