import { io } from "socket.io-client";

const socket = io("localhost:5000", {
    query: {

    },
    autoConnect: false,
    auth: {
        token: "abcd"
    }
});

export const connect = () => {
    socket.connect();
    console.log(socket.connected)
    eventConnect()
}

export const eventConnect = () => {
    socket.on("connect", () => {
        console.log("Connected", socket)
    })
}


export const disconnect = () => {
    socket.on("disconnect", () => {

    })
}