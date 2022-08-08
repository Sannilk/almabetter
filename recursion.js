function count(num){
    console.log(num);

    let newnum = num + 1;
    if(newnum <= 20){
        count(newnum)
    }
    else{
        console.log(`newnum is greater than 20`)
    }
}

count(21)