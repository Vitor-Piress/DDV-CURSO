import { MenuItem } from "./menu-item.js";
import { Order, OrderStatus } from "./order.js";

class CoffeeShop {
  private menu: MenuItem[] = [];
  private orders: Order[] = [];

  private nextMenuId: number = 1;
  private nextOrderId: number = 1;

  public addMenuItem(name: string, price: number): void {
    const menuItem = new MenuItem(this.nextMenuId, name, price);

    this.menu.push(menuItem);

    this.nextMenuId++;
  }

  public listMenu(): void {
    console.log("Menu:");

    this.menu.forEach((item) => {
      console.log(`ID: ${item.id} / - / Name: ${item.name} R$ ${item.price}`);
    });
  }

  public placeOrder(itemsIds: number[]): Order {
    const items = this.menu.filter((item) => itemsIds.includes(item.id));

    const order = new Order(this.nextOrderId, items);
    this.nextOrderId++;

    this.orders.push(order);
    return order;
  }

  public listOrders(): void {
    console.log("\nPedidos:");

    this.orders.forEach((order) => {
      console.log("\nOrder ID:", order.id);
      console.log("Status do Pedido:", order.status);

      console.log("\nItems do Pedido:");
      order.items.forEach((item) => {
        console.log("ID:", item.id, "-", item.name, "R$", item.price);
      });
      console.log(
        `\nTotal do pedido ID ${order.id}: R$`,
        order.calculateTotal(),
      );
      console.log("\n--------------------------");
    });
  }

  public updateOrderStatus(orderId: number, status: OrderStatus): void {
    const order = this.orders.find((order) => orderId === order.id);

    if (order) {
      order.updateStatus(status);
      console.log(
        `\n* Order ID ${orderId} was succesfully updated to ${order.status}!\n`,
      );
    } else {
      console.log(`\n* Order ID ${orderId} was not found!\n`);
    }
  }
}

const coffeeShop = new CoffeeShop();
coffeeShop.addMenuItem("Capuccino", 10);
coffeeShop.addMenuItem("Espresso", 8);
coffeeShop.addMenuItem("Matinal", 6);
coffeeShop.addMenuItem("Pastel", 12);
coffeeShop.addMenuItem("Pão de Queijo", 6);

coffeeShop.listMenu();

// const order = coffeeShop.placeOrder([1, 3, 2, 4]);
// console.log("\n", order);
// console.log("\nTotal: R$", order.calculateTotal());
// order.updateStatus(OrderStatus.COMPLETED);
// console.log("\n", order);

const order1 = coffeeShop.placeOrder([1, 3, 2, 4]);
const order2 = coffeeShop.placeOrder([1]);
coffeeShop.placeOrder([2, 4]);
coffeeShop.placeOrder([2, 1, 5]);
coffeeShop.listOrders();

coffeeShop.updateOrderStatus(order1.id, OrderStatus.PREPARING);
coffeeShop.updateOrderStatus(order2.id, OrderStatus.COMPLETED);
coffeeShop.listOrders();
