class User {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }

    init() {
        document.getElementById('userButton').addEventListener('click', () => this.showName());
    }
}

const alice = new User('Alice');
alice.init();