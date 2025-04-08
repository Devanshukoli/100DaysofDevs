//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(model, price, label, color) {
        this.model = model;
        this.price = price;
        this.label = label;
        this.color = color;
    }

    makeEspresso() {
        console.log('make the espresso')
    }

    boilTheWater() {
        console.log('Boiling the water....')
    }

    getEspresso() {
        console.log('click the button to get your espresso....')
    }

}