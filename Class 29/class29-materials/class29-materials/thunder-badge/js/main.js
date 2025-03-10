//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Pokemon {
    constructor(name, type, level = 1) {
        this.name = name
        this.type = type
        this.level = level
        this.health = 100
        this.attack = 50
        this.defense = 20
        this.moves = []
        this.expereince = 10
        this.isShiny = Math.random() < 0.1 
    }

    levelUp() {
        this.level++
        this.health += 5
        this.attack += 3
        this.defense += 4
    }

    learnsMove() {
        if (this.moves.length < 4) {
            this.moves.push(move)
        } else {
            console.log("Pokemon can only have 4 moves")
        }
    }

    attack(opponent) {
        const damage = Math.floor(this.attack * (1 - opponent.defense / 100))
        opponent.health -= damage
        return damage
    }
}

const pikachu = new Pokemon('Pikachu', "electric", 5)
pikachu.learnsMove('Thunderbolt')
pikachu.learnsMove('Quick attack')