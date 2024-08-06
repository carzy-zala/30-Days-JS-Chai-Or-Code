class Account {
  #balance = 0;
  #deposite(amount) {
    this.#balance += amount;
    console.log(`${amount} is added to account`);
    console.log(`Your current balance is ${this.#balance}`);
  }
  #withdraw(amount) {
    if (amount > this.#balance) {
      console.log("You have not sufficient balance");
      return;
    }
    this.#balance = this.#balance - amount;
    console.log(`${amount} is succesfully withdraw `);
  }
  deposit(amount) {
    this.#deposite(amount);
  }
  withdraw(amount) {
    this.#withdraw(amount);
  }
}

const acc1 = new Account();
acc1.deposit(5000);
acc1.withdraw(200);
acc1.deposit(500);
acc1.withdraw(20);
acc1.withdraw(10);
