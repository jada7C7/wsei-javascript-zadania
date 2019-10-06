(function(){
    //ex 0
function distFromAvarage(values) {
    let sum = values.reduce((previous, current) => current += previous);
    let avg = sum / values.length;
    const newArray = [];
    for(let i = 0; i < values.length; i++ ){
        newArray.push(Math.abs(values[i]-avg))
    }
    console.log(newArray)
    return newArray;
}
// distFromAvarage([2,8,3,7]);

//ex1
function favouriteFruit(fruit){
    let firstFruit = fruit[0];
    console.log(firstFruit, 'first');
    let lastFruit = fruit[fruit.length-1];
    console.log(lastFruit, 'last');
    fruit.forEach(e=>{
        console.log(e, 'for')
    })

}
// favouriteFruit(['gruszka', 'jablko', 'kiwi'])

//ex3
function printTable(array){
    array.forEach(el =>{
        console.log(el)
    })
}
// printTable([1,2,3,4,5,6])

//ex4
function multiply(array){
    let score = 1;
    for(let i =0; i < array.length; i++){
        score =score*array[i];
    }
    return score;
}
multiply([1,2,3,4,5,6,7]);
})();