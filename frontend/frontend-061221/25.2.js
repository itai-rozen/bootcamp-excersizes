const object = {
    name: 'Itai',
    printName: function() {
        console.log('hey ' + this.name)
    },
    delay: function (){
         setTimeout(this.printName.bind(this),1000)
    } 
}

object.delay()