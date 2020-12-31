// Your code here

class Polygon {

    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let perimeter = this.sides.reduce(function(total, element) {return element + total}, 0)
        return perimeter 
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            return true
        } else {
            return false
        }
    }

}

class Square extends Polygon {

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        if ((a == b) && (b == c) && (c == d)) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
    
}