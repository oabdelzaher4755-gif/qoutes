var Qoute = document.getElementById("Qoute");


var lastNumber = "";
function qoute(){
    var  Number = (Math.floor(Math.random() * 6) +1);
    for(;Number == lastNumber;){
         Number = (Math.floor(Math.random() * 6) +1);
    }
    lastNumber = Number;
    if(Number === 1){
       Qoute.innerHTML = 
                `<div>                   
                    <p>"Do not take life too seriously. You will not get out alive."</p>
                    <p>--Elbert Hubbard</p>
                </div> ` ;
    }else if(Number === 2){
        Qoute.innerHTML = 
                    ` <div>
                        <p>"Resentment is like drinking poison and waiting for your enemies to die."</p>
                         <p>--Nelson Mandela</p>    
                    </div>`;
    }else if(Number === 3){
        Qoute.innerHTML = 
                `<div>
                    <p>"The best revenge is massive success."</p>
                    <p>--Frank Sinatra</p>
                </div>`;
    }else if(Number === 4){
        Qoute.innerHTML = 
                `<div>
                     <p>"You miss 100% of the shots you don't take."</p>
                     <p>--Wayne Gretzy</p>
                </div>`;
    }else if(Number === 5){
        Qoute.innerHTML = 
                `<div>
                    <p>"It's not what happens to you, but how you react to it that matters."</p>
                    <p>--Epictetus</p>                  
                </div>`;
    }   else if(Number === 6){
        Qoute.innerHTML = 
                `<div>
                    <p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
                     <p>― Albert Einstein</p>
                </div>`;
    }
}

