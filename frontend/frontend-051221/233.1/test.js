


window.onload = function(){
    console.log('hi')
    const el = document.querySelector('.el')
    el.addEventListener('load',() => 
console.log(this)
    );
}
// el.addEventListener(,() => {

// });