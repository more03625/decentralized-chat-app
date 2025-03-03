const Hyperswarm = require('hyperswarm');
const readline = require('readline');
const crypto = require('crypto');
require('dotenv').config();

const { encryptMessage, decryptMessage } = require('./utils');

// Unique topic (same for all peers)
const topic = crypto.createHash('sha256').update('p2p-chat-room').digest();

// Initialize Hyperswarm
const swarm = new Hyperswarm();

// Join the topic
swarm.join(topic, { server: true, client: true })

// Store connected peers
const peers = new Set();

// Read user input from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Start listening for connections.
swarm.on('connection', (socket, details) => {
    console.log('🔗 New peer connected!');

    peers.add(socket);

    // Listen for the incoming messages
    socket.on('data', (data) => {
        const decryptedMessage = decryptMessage(data.toString());
        console.log(`📩 ${decryptedMessage}`)
    });

    socket.on('close', () => {
        console.log('❌ Peer disconnected');
        peers.delete(socket);
    });
});

function sendMessage() {
    rl.question('💬 Type a message:', (message) => {
        const encrypted = encryptMessage(message);
        peers.forEach((peer) => peer.write(encrypted));
        sendMessage();
    })
}

setTimeout(sendMessage, 3000);