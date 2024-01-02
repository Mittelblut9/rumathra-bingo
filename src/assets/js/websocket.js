import { io } from 'socket.io-client';

let socket;

if (process.env.VUE_APP_WEBSOCKET_URL) {
    socket = io(process.env.VUE_APP_WEBSOCKET_URL, {
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
}else {
    console.error('No websocket url found');
}

export default socket;
