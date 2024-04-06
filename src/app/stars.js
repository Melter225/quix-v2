import { useEffect } from 'react';
const Logic = ({ mappingArray }) => {
    useEffect(() => {
        const styleElement = document.createElement('style');
        let css = '';
        mappingArray.forEach(value => {
            css += `
                .star-animation-${value} { 
                    animation: moveStar${value} 10s infinite alternate linear; 
                } 
                @keyframes moveStar${value} { 
                    from { 
                        transform: translate(0, 0); 
                    } 
                    to { 
                        transform: translate(${getRandomInt(-50, 50)}px, ${getRandomInt(-50, 50)}px); 
                    } 
                }
            `;
        });
        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [mappingArray]);
    return null;
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default Logic;