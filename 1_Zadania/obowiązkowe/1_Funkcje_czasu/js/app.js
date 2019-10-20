(function () {
    //Exercise 1
    function countHello(count) {
        if (count <= 10 && count >= 1 && !isNaN(count)) {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                console.log(i, 'Hello');
                if (i === count) {
                    clearInterval(interval);
                }
            })
        } else {
            alert('only numbers from 1 to 10');
        }
    }
    countHello(2);
})()