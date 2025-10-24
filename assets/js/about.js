document.addEventListener('DOMContentLoaded', () => {
    //Typing animation
    const textElement = document.getElementById('typing-text');
    const textToType = "Welcome to Epic Ink Gamers";
    let charIndex = 0;
    const typingSpeed = 100;

    if (!textElement) return;
        textElement.textContent = ""; // Empty any prefilled content

    function getRandomLightColor(){
        const r = Math.floor(150 + Math.random() * 105);//150-255 prevent dark tones
        const g = Math.floor(150 + Math.random() * 105);
        const b = Math.floor(150 + Math.random() * 105);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function typeText(){
        if(charIndex < textToType.length){
            const span = document.createElement('span');//Control each letter
            span.textContent = textToType[charIndex];

            span.style.color = getRandomLightColor();
            textElement.appendChild(span);//print
            charIndex++;

            setTimeout(typeText, typingSpeed);
        }
    }
    // Start the typing animation when the page loads
    typeText();  
});