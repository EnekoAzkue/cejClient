import { io, Socket } from 'socket.io-client';
import type { ServerToClientEvents, ClientToServerEvents } from '../interfaces/socket';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:3000',
  {
    autoConnect: false,
  },
);

export const initSocket = (userEmail: string) => {
  socket.on('connect', () => {
    console.log('Socket connected with id:', socket.id);
    (socket as any).emit('connection open', { email: userEmail });
  });

  socket.connect();
};

export default socket;
