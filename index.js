const robot = require('robotjs');

// Function to move the mouse cursor to a random position
function moveMouseRandomly() {
    try {
        // Get the screen size
        const screenSize = robot.getScreenSize();

        // Generate random coordinates within the screen size
        const randomX = Math.floor(Math.random() * screenSize.width);
        const randomY = Math.floor(Math.random() * screenSize.height);

        // Move the mouse cursor to the random position
        robot.moveMouse(randomX, randomY);

        console.log(`Moved mouse to: (${randomX}, ${randomY})`);
    } catch (error) {
        console.error('Error moving mouse:', error.message);
    }
}

// Move the mouse cursor every 5 seconds
setInterval(moveMouseRandomly, 5000);

console.log('Random mouse movement script started. Press Ctrl+C to exit.');