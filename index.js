class Polygon {
    constructor(arrayOfInt){
        this.sides = arrayOfInt
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if (Array.isArray(this.sides)){
            return this.sides.reduce( (total, side) => {
                return total = total + side
            }, 0)
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (Array.isArray(this.sides)) {
            if (this.sides.length === 3) {
                let sideA = this.sides[0]
                let sideB = this.sides[1]
                let sideC = this.sides[2]
                return ((sideA + sideB > sideC) && (sideB + sideC > sideA) && (sideC + sideA > sideB))
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (Array.isArray(this.sides)) {
            if (this.sides.length === 4) {
                let sideA = this.sides[0]
                let sideB = this.sides[1]
                let sideC = this.sides[2]
                let sideD = this.sides[3]
                return ((sideA === sideB) && (sideB === sideC) && (sideC === sideD))
            }
        }
        return !!(this.sides.length === 4)
    }

    get area() {
        if (Array.isArray(this.sides)) {
            if (this.sides.length === 4) {
                return this.sides[0] ** 2
            }
        }
    }

}