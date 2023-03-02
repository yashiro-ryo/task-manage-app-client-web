import { io, Socket } from "socket.io-client";

class SocketIO {
  socket: Socket | undefined;

  createConnection(serverUrl: string, token: string, projectId: number) {
    this.socket = io(serverUrl, {
      auth: { token },
      query: { projectId },
    });
    if (this.socket === undefined) {
      return Promise.reject("failed to connect server");
    }
    return Promise.resolve();
  }

  getSocket() {
    return this.socket;
  }

  setSocket(socket: Socket) {
    this.socket = socket;
  }
}

export const socketIO = new SocketIO();
