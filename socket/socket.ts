import { io, Socket } from 'socket.io-client';
import type { ServerToClientEvents, ClientToServerEvents } from '../interfaces/socket';
import { SocketEvents } from '../constants';


const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:3000',
  {
    autoConnect: false,
  },
);

export const initSocket = (userEmail: string) => {
  socket.on(SocketEvents.CONNECT, () => {
    console.log(SocketEvents.CONNECTION_OPEN_MESSAGE, socket.id);
    socket.emit(SocketEvents.CONNECTION_OPEN, userEmail);
  });
  
  socket.connect();
};

export const discSocket = () => {
  socket.disconnect();
  socket.off(SocketEvents.CONNECT);
}

export default socket;
