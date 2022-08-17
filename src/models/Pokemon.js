export class Pokemon{
    constructor(data){
        this.id = data.id || ''
        this.name = data.name
        this.weight = data.weight
        this.heigh = data.height
        this.types = data.types
        this.img = data.sprites.other.dream_world.front_default
    }
}