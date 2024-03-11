const express = require('express');
const path = require('path'); // Add this line

const app = express();

app.use(express.static(path.join(__dirname)));

// Define the route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/addListing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'addListing.html'));
});

app.get('/findRoommate.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'findRoommate.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
