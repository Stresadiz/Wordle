let words = [
    "hola", "manzana", "perro", "gato", "casa", 
    "amarillo", "azul", "verde", "rojo", "naranja",
    "coche", "bicicleta", "computadora", "telefono", 
    "agua", "leche", "libro", "futbol", "guitarra", 
    "sol", "luna", "amor", "amistad", "viaje", "aventura", 
    "diversion", "baile", "cine", "musica", "reir", 
    "llorar", "sonar", "tiempo", "naturaleza", "ciudad", 
    "salud", "vida", "muerte", "familia", "trabajo", 
    "dinero", "educacion", "escuela", "universidad", 
    "arte", "cultura", "historia", "ciencia", "tecnologia", 
    "internet", "espacio", "planeta", "mar", "montana", 
    "bosque", "playa", "rio", "cielo", "fuego", "aire", 
    "tierra", "animal", "planta", "piedra", "metal", "fruta", 
    "verdura", "carne", "pescado", "mariposa", "abeja", 
    "flor", "hoja", "raiz", "soltero", "casado", 
    "divorciado", "viudo", "soltera", "joven", "adulto", 
    "anciano", "niño", "niña", "hermano", "hermana", "padre", 
    "madre", "abuelo", "abuela", "amigo", "amiga", "vecino", 
    "vecina", "profesor", "profesora", "estudiante", "alumno", 
    "alumna", "doctor", "enfermera", "abogado", "ingeniero", 
    "policia", "bombero", "artista", "escritor", "poeta", "actor", 
    "actriz", "director", "presidente", "gobierno", "pais", 
    "ciudadano", "democracia", "derechos", "deberes", "justicia", 
    "paz", "guerra", "conflicto", "crisis", "problema", 
    "solucion", "exito", "fracaso", "sueno", "pesadilla", 
    "esperanza", "desesperacion", "alegria", "tristeza", 
    "felicidad", "miedo", "coraje", "amoroso", "odioso", 
    "valiente", "cobarde", "inteligente", "tonto", "rico", 
    "pobre", "alto", "bajo", "fuerte", "debil", "rapido", 
    "lento", "bueno", "malo", "bonito", "feo", "caliente", 
    "frio", "duro", "suave", "limpio", "sucio", "joven", "viejo", 
    "feliz", "triste", "enojado", "cansado", "sorprendido", 
    "asustado", "contento", "orgulloso", "humilde", "honesto", 
    "mentiroso", "amable", "grosero", "generoso", "egoista", 
    "puntual", "impuntual", "simpatico", "antipatico", 
    "amigable", "solitario", "activo", "perezoso", "divertido", 
    "aburrido", "serio", "gracioso", "complicado", "sencillo", 
    "interesante", "aburrido", "educado", "grosero", "habil", 
    "torpe", "tranquilo", "nervioso", "amoroso", "despistado", 
    "ordenado", "desordenado", "intenso", "relajado", "valioso", 
    "insignificante", "nuevo", "viejo", "fresco", "estado", "rico", 
    "pobre", "fuerte", "debil", "salado", "dulce", "agrio", 
    "amargo", "picante", "frio", "caliente", "delicioso", 
    "asqueroso", "bien", "mal", "arriba", "abajo", "adentro", 
    "afuera", "cerca", "lejos", "derecha", "izquierda", 
    "ancho", "estrecho", "pesado", "ligero", "alto", "bajo", 
    "lleno", "vacio", "largo", "corto", "claro", "oscuro", "ruidoso", 
    "silencioso", "abierto", "cerrado", "grande", 
    "largo", "corto", "caro", "barato", "moderno", "antiguo", 
    "duro", "suave", "interior", "exterior", "superior", "inferior", 
    "principal", "secundario", "profundo", "superficial", "rico", 
    "pobre", "amplio", "estrecho", "largo", "corto", "claro", 
    "oscuro", "ruidoso", "silencioso", "abierto", "cerrado", 
    "grande", "pequeño", "largo", "corto", "caro", "barato", 
    "moderno", "antiguo", "duro", "suave", "interior", "exterior", 
    "superior", "inferior", "principal", "secundario", "profundo", 
    "superficial", "rico", "pobre", "amplio", "estrecho", 
    "largo", "corto", "claro", "oscuro", "ruidoso", "silencioso", 
    "abierto", "cerrado", "grande", "pequeño"
]

// Función para obtener una palabra aleatoria del array
function obtenerPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * words.length);
    return words[indiceAleatorio];
}

// Obtener una palabra aleatoria
let palabraAleatoria = obtenerPalabraAleatoria();

// Separar la palabra en caracteres y guardarla en el array wordToFind
let wordToFind = palabraAleatoria.toUpperCase().split('');

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

            let countTrueLetters = 0;

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

                /* Validacion si el usuario gana */
                if (countTrueLetters == largeArray) {
                    alert("Felicitaciones! Ganaste!");
                    location.reload();
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
})

