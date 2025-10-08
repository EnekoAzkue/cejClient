import { SocketEvents } from "../constants"

// Declaration of the events used when receiving events from the server
export interface ServerToClientEvents {}

// Declaration of the events used when sending events to the server
export interface ClientToServerEvents {
  [SocketEvents.CONNECTION_OPEN]: (arg: string) => void;
  [SocketEvents.CONNECT]:  () => void;
}
