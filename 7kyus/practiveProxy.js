const bank = {
  balance: 200
};
const bankProxy = new Proxy(bank, {
  get(target, property) {
    if (property === "balance") {
      console.log("Someone checked the balance");
    }
    return target[property];
  },
  set(target, property, value) {
    if (property === "balance" && value < 0) {
      console.log("Can't have negative money");
    } else {
      target[property] = value;
      console.log(`Balance updated to ${value}`);
    }
  }
});
console.log(bankProxy.balance);
bankProxy.balance = -10;
bankProxy.balance = 10;
