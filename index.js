class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return (this.radius * 2) * Math.PI
    }
    get area() {
        return (this.radius * this.radius) * Math.PI
    }
    set diameter(value) {
        return this.radius = value/2
    }
    set circumference(value) {
        return this.radius = (value/Math.PI)/2
    }
    set area(value){
        return this.radius = Math.sqrt((value/Math.PI))
    }
}