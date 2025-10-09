import { SocketClientToServerEvents } from '../constants';

// Declaration of the events used when receiving events from the server
export interface ServerToClientEvents {}

// Declaration of the events used when sending events to the server
export interface ClientToServerEvents {
  [SocketClientToServerEvents.CONNECTION_OPEN]: (userEmail: string) => void;
}
