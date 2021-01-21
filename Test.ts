let RED;
RED = "#FF0000",
    GREEN = "#00FF00",
    BLUE = "0000FF",
}
let userChoice = "#FF0000";
let isRed: boolean = false;
if (userChoice == colors.RED) {
    isRed = true;
}
console.log(isRed);
interface Order {
    customerName: string,
    itemNumbers: number[],
    isComplete?: boolean
}
let order1: Order;
order1 = {
    customerName: "Abiye",
    itemNumbers: [123, 44, 232]
}
