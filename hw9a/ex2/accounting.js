class Account {
    //Constructor
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    // function credit
    credit(value) {
        this.balance = value;
    }
    // function credit
    describe() {
        return "owner: " + this.name + ", balance: " + this.balance
    }
}

module.exports = Account;