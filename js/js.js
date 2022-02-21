const eurPerKm = 0.21 + "euro";

let eta = prompt("Inserisci la tua età", "Età");

if (isNaN(eta) && eta <= 0) {
    prompt("Perfavore inserire età", "Età");
}

let km = prompt("Quanti km vuoi percorrere?", "KM");

if (isNaN(km) && km <= 0) {
    prompt("Perfavore inserire numero km ", "KM");
    }