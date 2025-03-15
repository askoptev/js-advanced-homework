"use strict";

class FixBilling {
  calculate(amount) {
    return amount;
  }
}

class HourBilling extends FixBilling {
  constructor(hour) {
    super();
    this.hour = hour;
  }
  calculate(amount) {
    return amount * this.hour;
  }
}

class ItemBilling extends FixBilling {
  constructor(item) {
    super();
    this.item = item;
  }
  calculate(amount) {
    return amount * this.item;
  }
}

class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal(typeBilling) {
    console.log(typeBilling.calculate(this.amount));  }
}

const billing = new Billing(100);

const fixBilling = new FixBilling();
const hourBilling = new HourBilling(10);
const itemBilling = new ItemBilling(5);

billing.calculateTotal(fixBilling);
billing.calculateTotal(hourBilling);
billing.calculateTotal(itemBilling);
