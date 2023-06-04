import { WebSocketServer, WebSocket } from 'ws';
import { addPizzas } from './pizzaService';

const webSocketService = () => {
    let connection: WebSocket | undefined;
    let webSocketServer: WebSocketServer;
    const startServer = () => {
        webSocketServer = new WebSocketServer({ port: 8080 });
        webSocketServer.on('connection', ws => {
            ws.on('message', data => {
                console.log('received: %s', data);
                const pizzaData = JSON.parse(data.toString());
                addPizzas(pizzaData as any).then(pizzas =>
                    ws.send(JSON.stringify(pizzas)),
                );
            });
            connection = ws;
        });
    };
    let sendMessage = (message: string) => {
        if (connection !== undefined) {
            connection.send(message);
        }
    };

    return {
        sendMessage,
        startServer,
    };
};

export default webSocketService();
