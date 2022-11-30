class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(height,base,depth) {
        this.height = height;
        this.base = base;
        this.depth = depth;
    }
    
   
}
module.exports = {
    Cube:Cube,
    Triangle:Triangle
}