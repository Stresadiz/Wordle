// Función para obtener una palabra aleatoria del array
function obtenerPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * words.length);
    if (words[indiceAleatorio].length >= 4 && words[indiceAleatorio].length <= 7) {
        return words[indiceAleatorio];
    } else {
        return obtenerPalabraAleatoria()
    }
}

// Obtener una palabra aleatoria
let palabraAleatoria = obtenerPalabraAleatoria();

// Separar la palabra en caracteres y guardarla en el array wordToFind
let wordToFind = palabraAleatoria.toUpperCase().split('');

/* Cambiar aquellas palabras que tienen tilde */
wordToFind.forEach((index, i) => {
    if (index == "Á") {
        wordToFind[i] = "A"
    } else if (index == "É") {
        wordToFind[i] = "E"
    } else if (index == "Í") {
        wordToFind[i] = "I"
    } else if (index == "Ó") {
        wordToFind[i] = "O"
    } else if (index == "Ú") {
        wordToFind[i] = "U"
    }
});

let validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let actualWord = []
let lastIndex = 0;
let rowActual = 0;
let largeArray = wordToFind.length

//Detectamos las casillas existentes por cada letra de la palabra
let rows = document.querySelectorAll(".row");
let lettersBoxes = document.querySelectorAll(".letter");

// Creacion de cada box de letras
for (let j = 0; j < rows.length; j++) {
    for (let i = 0; i < wordToFind.length; i++) {
        let box = document.createElement("div")
        box.classList.add("box");
    
        rows[j].appendChild(box);
    }
}

let boxes = document.querySelectorAll(".box");

//Validacion de letras que se clickean
window.addEventListener("keydown", (e) => {
    detectLetterClicked(e);
})

/* Funcionamiento de cada boton */
let buttons = document.querySelectorAll(".letter");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", (e)=>{
        let letter = btn.getAttribute('value');

        simulateKeyPress(letter)
    })
});

/* Funcion de simular el evento click */
function simulateKeyPress(key) {

    let eventSimulate;

    /* Validamos que letra se presiona en los botones */
    function eventSimulateFunc(key) {
        keyCode = key.charCodeAt(0);

        if (key == 'Backspace') {
            keyCode = 8
        } else if (key == 'Enter') {
            keyCode = 13
        }

        /* Asignamos los datos de la key */
        eventSimulate = new KeyboardEvent('keydown', {
            key: key,
            keyCode: keyCode,
            which: keyCode
        });
        
    }

    eventSimulateFunc(key)

    detectLetterClicked(eventSimulate);
}

/* Funcion para validar la letra ya sea por teclado o por pantalla */
function detectLetterClicked(e) {

    let countTrueLetters;
    
    //Validamos que sean letras mayusculas o minusculas
    if (validLetters.includes(e.key)) {

        //Escribimos sobre el box correspondiente
        if (actualWord.length < largeArray && lastIndex < boxes.length) {
            actualWord.push(e.key.toUpperCase());

            boxes[lastIndex].textContent = actualWord[actualWord.length-1]
            lastIndex++
            boxes[lastIndex-1].style.border = "1px solid white"
        }
    }
    
    //Validamos si es el enter el cual se clickea
    if (e.keyCode == 13 && lastIndex%largeArray == 0) {
        let detectFinalRow = rowActual*largeArray

        if (lastIndex-1 >= detectFinalRow) {

            countTrueLetters = 0;

            /* Validar similitudes */
            actualWord.forEach((letter, index) => {

                if (wordToFind.find(e => e == letter)) {

                    if (actualWord[index] == wordToFind[index]) {
                        boxes[detectFinalRow+index].classList.add("box--true")
                        
                        /* Validamos el teclado y que letras se usaron */
                        for (let i = 0; i < lettersBoxes.length; i++) {

                            if (lettersBoxes[i].textContent == boxes[detectFinalRow+index].innerHTML) {
                                lettersBoxes[i].classList.remove("box--mid")
                                lettersBoxes[i].classList.add("box--true")
                            }
                        }

                        countTrueLetters++

                    } else{
                        boxes[detectFinalRow+index].classList.add("box--mid");

                        /* Validamos el teclado y que letras se usaron */
                        for (let i = 0; i < lettersBoxes.length; i++) {

                            if (lettersBoxes[i].textContent == boxes[detectFinalRow+index].innerHTML) {
                                lettersBoxes[i].classList.add("box--mid")
                            }
                        }
                    }

                } else {
                    /* Le damos un estilo dafult si no coincide ninguna letra */
                        boxes[detectFinalRow+index].classList.add("box--none");

                        /* Validamos el teclado y que letras se usaron */
                        for (let i = 0; i < lettersBoxes.length; i++) {

                            if (lettersBoxes[i].textContent == boxes[detectFinalRow+index].innerHTML) {
                                lettersBoxes[i].classList.add("box--none")
                            }
                        }
                }


            });

            /* Reseteamos el array y aumentamos la fila */
            actualWord = []
            rowActual++
            
        }
        
    } else if (e.keyCode == 13 && lastIndex%largeArray != largeArray) {
        alert("Debes completar la palabra para continuar!")
    }

    //Validamos si le damos al return para borrar
    if (e.keyCode == 8) {

        /* Delete */
        let detectFinalRow = rowActual*largeArray

        if (lastIndex-1 >= detectFinalRow) {
            actualWord.pop()
            boxes[lastIndex-1].textContent = ""
            boxes[lastIndex-1].style.border = "1px solid rgb(73, 70, 70)"
            lastIndex--
        }
    }

    /* Validamos si el usuario perdio */
    if (lastIndex >= rows.length && rowActual > 4) {

        setTimeout(() => {
            alert("Lo sentimos, has perdido!");
            location.reload()
        }, 2000);
        
    }

    /* Validacion si el usuario gana */
    if (countTrueLetters == largeArray) {
        setTimeout(() => {
            alert("Felicitaciones! Ganaste!");
            location.reload();
        }, 2000);
    }
}