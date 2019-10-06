(function(){
function countHello(count){
    if(count <= 10 && count >=1 && !isNaN(count)){
        let i = 0;
        const interval = setInterval(()=>{
            i++;
            console.log(i,'Hello')
            if(i === count){
                clearInterval(interval)
            }
        })
    }else{
        alert('only 1-10 and only typ number')
    }
}
countHello(2);
})()