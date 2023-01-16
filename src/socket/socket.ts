import { io, Socket } from "socket.io-client";

export let socket: Socket | null = null;

function setupSocket() {
  socket = io("http://localhost:5050");
  socket.on("connect", () => {
    console.log("socket connected");
  });
  socket.on("init-tasks", (data: any) => {
    console.log(data);
  });
}

export default {
  setupSocket,
} as const;
