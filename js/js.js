const eurPerKm = 0.21;

let eta = prompt("Inserisci la tua età", "Età");

if (isNaN(eta) || eta <= 0) {
    prompt("Perfavore inserire età", "Età");
}

let km = prompt("Quanti km vuoi percorrere?", "KM");

if (isNaN(km) || km <= 0) {
    prompt("Perfavore inserire numero km ", "KM");
}

let totale = 0.21 * km;

if (eta < 18) {
    totale = (totale - (totale / 100 * 20));
    window.alert("Sei minorenne, ti è stato applicato uno sconto del 20% sul totale. Totale:" + totale + " euro");
} else if (eta > 65) {
    totale = (totale - (totale / 100 * 40));
    window.alert("Ti è stato applicato uno sconto del 40% sul totale. Totale:" + totale + " euro");
} else {
    window.alert("Nessuno sconto applicato. Il totale da pagare è: Totale:" + totale + " euro");
}