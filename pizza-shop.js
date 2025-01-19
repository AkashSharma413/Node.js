const EventEmitter = require("node:events") 

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.ordernumber = 0;
    }

    order(size, topping) {
        this.ordernumber++;
        this.emit("order", size, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number is: ${this.ordernumber}`);
    }
}

module.exports = PizzaShop;