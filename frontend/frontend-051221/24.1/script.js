function Square(a,b,c,d){
    this.a = a
    this.b = b
    this.c = c
    this.d = d
}

Square.prototype.isSquare = function(){
    return (this.a === this.c && this.b === this.d)
}
    let newSquare = new Square(1,2,1,2)

console.log(newSquare.isSquare())