// Pirma užduotis:
// Paklauskite prekės kainos ir atspausdinkite tokį rezultatą:
// Prekės kaina su PVM: xx.xx €
// PVM: xx.xx €
// Prekės kaina be PVM: xx.xx €
// Suapvalinkite iki 2 skaičių po kablelio.
// PVM = 21%
// Kad atspausdinti tekstą ir kintamąjį vienoje eilutėje:
// naudokite console.log("Prekės kaina su PVM: " + kaina + "€")
// Papildomai:
// Jeigu įvestas ne skaičius, o tekstas, pakartotinai klausti kainos (isNaN)
//prompt("kokia prekes kaina?");


// var prekesKaina = prompt("Kokia prekes kaina?", "Įveskite kainą skaičiais");
// var prekesKainaBePVM;
// var PVM;


while (isNaN(prekesKaina)) { // Kol ivesta verte NERA SKAICIUS (teiginys TRUE), tol kartojame uzklausa
    prekesKaina = prompt("Kokia prekes kaina?", "Įveskite kainą skaičiais");
    if (prekesKaina === false) { // Ciklas sustoja, ka ivedama verte SKAICIUS (teiginys FALSE)
        break;
    }
}
    var prekesKainaBePVM = prekesKaina / 1.21;
    var PVM = prekesKaina - prekesKainaBePVM;
    var prekesKaina = Number(prekesKaina);
    console.log("Prekes kaina VISO = " + prekesKaina + "EUR");
    console.log("PVM = " + PVM.toFixed(2) + "EUR");
    console.log("Prekes kaina be PVM = " + prekesKainaBePVM.toFixed(2) + "EUR");

    



