
// ======================================================
// DISTANCE VECTOR SIMULATOR
// ======================================================

// Distance Vector Table Shape
/**
 * Node A Table:
 * {
 *     A: 0,
 * }
 */

const network = ["A", "B", "C", "D", "E"];

class Router {

    constructor(id) {
        this.id = id;
        this.routingTable = new Map();
    }
}

class Device {

    constructor(id, isRouter) {
        this.id = id;
        this.isRouter = isRouter;
        if (isRouter) {
            this.routingTable = new Map();
        }
    }

    neighborDiscovery() {
        
    }

    connect(device) {
        this.routingTable.set(device.id, 1);
        device.routingTable.set(this.id, 1);
        console.log(`Connected to ${device.id}`);
    }

    disconnect(device) {
        this.routingTable.delete(device.id);
        device.routingTable.delete(this.id);
        console.log(`Disconnected from ${device.id}`);
    }

    send(message, device) {
        
    }

}

// P2P Network
function simulateP2P() {

    // Nodes
    const nodeA = new Device(1, true);
    const nodeB = new Device(2, true);
    const nodeC = new Device(3, true);
    const nodeD = new Device(4, true);
    const nodeE = new Device(5, true);

    // Links
    nodeA.connect(nodeB);
    nodeB.connect(nodeC);
    nodeC.connect(nodeD);
    nodeC.connect(nodeA);
    nodeD.connect(nodeE);



}

// Infrastructure Network with Routers
function simulateInfrastructure() {

}