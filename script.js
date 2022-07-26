const body = document.body;
var contador = contador + 1;



function geraDiv() {
    var seletores = document.getElementById("seletor");
    var option = seletores.options[seletores.selectedIndex];
    console.log(option.value);
    
    // 
    let div = document.createElement("div");
        div.id = '1';
        div.className = 'pai'
        div.classList.add("divs");

        

    // 
    var valor = option.value;
    var v2 = valor /2;
    for (let i = 0; i < 2; i++) {
        
        body.append(div);
        for (let j = 1; j < v2; j++) {
            
            let div2= document.createElement("div");
            div2.classList.add("divs");
            body.appendChild(div2);
            console.log(div2); 
        }
        // }
        
    }
}
// let div = document.createElement("div");
// div.classList.add("divs");

// body.appendChild(div);
// console.log(div); 