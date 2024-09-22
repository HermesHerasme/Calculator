//declaracion de variables
const pantalla = document.querySelector('.pantalla')

let botones = document.querySelectorAll('.btn')

//forEach para recorrer el objeto botones
//con un addEvenListener que al momento de hacer 'click' el contenido de los botones aparescan en la pantalla
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonesApretados = boton.textContent


        if(pantalla.textContent.length >12){

            pantalla.textContent = "Exess"
            return
            
        }

       




        //if que al momento que el boton sea = "C" se eliminara
        if(boton.id === "C"){
            pantalla.textContent = "0"
            //se retorna para que no se repita la condicion siguente
            return
        }

        //este if hace que al momento de de que se cumpla la condicion con un metodo .slice(0, -1) que elimina digito x digito
        if (boton.id ==="borrar"){
            //este if valida si la longitud de el texto que se encuentra dentro de la pantalla en === 1 que lo remplace por 0
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!" || pantalla.textContent === "Exess"){
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)

            }
            return
        }


        //en este if se le aplica una funcion de js llamada "aval" y lo que hace esta funcion es evaluar las cadenas que tengan operaciones aritmeticas
        if (boton.id === "igual"){
            try{
            pantalla.textContent =eval(pantalla.textContent)
            }catch{
                pantalla.textContent = "Error!"
            }
            return
        }


        //if que al momento que el contenido de la pantalla es === "0" se remplase el valor y si no que se agregue otro valor +=
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!" || pantalla.textContent === "Exess" ){
            pantalla.textContent = botonesApretados
        }else{
            pantalla.textContent += botonesApretados
        }




    })

})