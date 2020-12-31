class Polygon {
    constructor(arr){
        this.arr = arr
    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        return this.arr.reduce((accum, side) => accum + side)
    }

}

class Triangle extends Polygon{
    get isValid(){
        return (this.countSides === 3 && 
            this.arr[0] + this.arr[1] > this.arr[2] &&
            this.arr[1] + this.arr[2] > this.arr[0] &&
            this.arr[2] + this.arr[0] > this.arr[1])
    }
}

class Square extends Polygon{
    get isValid(){
        return (this.countSides === 4 &&
            this.arr.every(side => side === this.arr[0])
            )
    }

    get area(){
        return this.isValid ? this.arr[0]**2 : "not a square!"
    }

}