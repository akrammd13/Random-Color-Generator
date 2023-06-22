
// The number 16,777,215 is the total possible combinations of RGB(255,255,255) which is 32 bit colour.

function getColor() {
    let randomNumber = Math.floor(Math.random() * 16777215 ); 
    let randomHex = '#' + randomNumber.toString(16);

    // changes the background colour
    document.body.style.backgroundColor = randomHex;
    // changes the colour code
    document.getElementById('color-code').innerText = randomHex;
}


// Event Call
document.getElementById('btn').addEventListener('click',getColor);

// Initial Call (when 1st time page loads there must be a bg color)
getColor();