//declare UI
//btn means button 
//const never ever changes
// let you have to use it in the range of the block funtion
//var you can use anywhere and change it 3adi
let inputBtn = document.getElementById('input-btn');
let inputNumber = document.getElementById('input-number');
let lines = document.getElementById('div-Line');

inputBtn.addEventListener('click',onClicked);


function onClicked(e){
    lines.innerHTML='';
    for(let i=0 ;i< inputNumber.value; i++){
       let line = document.createElement('hr');
       line.style.border='8px solid';
       line.style.border='2px solid';
       lines.appendChild(line);
       //to make line color red
       line.addEventListener('click',function(x){
        x.target.style.color='blue';
       });
    }
   
    console.log(inputNumber.value);
}

//tr and td for table!! for project instead of hr
//using functions ----> function ex(){  }
