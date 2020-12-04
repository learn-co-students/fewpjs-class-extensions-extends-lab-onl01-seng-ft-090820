class Polygon {
    constructor(arr){
        this.arr = arr
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        let sum = 0
        // for (let i = 0; i < this.arr.length; i++) {
        //     sum = sum + this.arr[i]
        // }
        // return(sum)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.arr.reduce(reducer)
    }

}

class Triangle extends Polygon {
    
    get isValid() {
        if (this.countSides === 3) {
            let a = this.arr[0]
            let b = this.arr[1]
            let c = this.arr[2]
            return ((a + b > c) && (b + c > a) && (c + a > b))
        } else {
            return false
        }
    }
}
    class Square extends Polygon {
    
        get isValid() {
            if (this.countSides === 4) {
                
                return ((this.arr[0] === this.arr[1]) && (this.arr[1] === this.arr[2]) && (this.arr[2] === this.arr[3]))
            } else {
                return false
            }
        }

        get area() {
            if (this.isValid) {
                return (this.arr[0] * this.arr[1])
            }
        }

       
}