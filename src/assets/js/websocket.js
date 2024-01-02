import { io } from 'socket.io-client';

if(!process.env.VUE_APP_WEBSOCKET_URL) {
    throw new Error('VUE_APP_WEBSOCKET_URL is not defined');
}

const socket = io(process.env.VUE_APP_WEBSOCKET_URL, {
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
    port: 4000,
});

socket.on('connect', async () => {
    console.info('connected');
});

socket.on('error', (err) => {
    console.error(err);
});

export default socket;
