window.onload = () => {

// Variable age + pregunta
    let age = prompt("¿Cuál es tu edad?");
//Comienzo de funciones

//Para decir que hay error:
if (age % 1 !== 0 || age ===  "0" || age === NaN || age === null) {
    alert("Ingresa tu edad nuevamente.");

//Primera clasificación (1 a 3)     
} else if (age >= 1 && age <= 3) {
    alert("Eres un Toddler");

//Segunda clasificación (4 a 5)
} else if (age >= 3 && age <= 5) {
    alert("Eres un Preschooler");

//Tercera clasificaión (6 a 12)
} else if (age >= 5 && age <= 12) {
        alert("Eres un Gradeschooler");
        
//Cuarta clasificación (13 a 17)
} else if (age >= 12 && age <= 18) {
        alert("Eres un Teenager");
        
//Quinta clasificación ()
} else if (age >= 19 && age <= 21) {
        alert("Eres un Young Adult");
        
//Sexta clasificación 
} else if (age > 21) {
        alert("Eres un Adult");
}

}