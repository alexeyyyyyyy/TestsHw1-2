function processAction(callback) {
    callback();

}

const user = {
    name: 'Alice',
    showName() {
        console.log(this.name);
    }
};

processAction(() => user.showName());



