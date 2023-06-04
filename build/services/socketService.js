"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const pizzaService_1 = require("./pizzaService");
const webSocketService = () => {
    let connection;
    let webSocketServer;
    const startServer = () => {
        webSocketServer = new ws_1.WebSocketServer({ port: 8080 });
        webSocketServer.on('connection', ws => {
            ws.on('message', data => {
                console.log('received: %s', data);
                const pizzaData = JSON.parse(data.toString());
                const pizzas = (0, pizzaService_1.addPizzas)(pizzaData);
                ws.send(JSON.stringify(pizzas));
            });
            connection = ws;
        });
    };
    let sendMessage = (message) => {
        if (connection !== null) {
            connection.send(message);
        }
    };
    return {
        sendMessage,
        startServer,
    };
};
exports.default = webSocketService();
