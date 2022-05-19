let countEl = document.getElementById("count-el");
//HTML dokument koji dohvaca element koji ima ID count-el
let count=0;
let saveEl = document.getElementById("save-el");
function increment(){// pozivamo fju iz HTMLa onclick
    count += 1;
    countEl.textContent = count;
    console.log(count);//mijenjamo text u HTMLu u count koji svakim klikom doda 1 
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0; //napise nulu kad stisnemo save
    count = 0; //zapravo zapocne brojat on nule
}
