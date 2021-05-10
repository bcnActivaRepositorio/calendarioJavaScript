//definimos new Date (nativo de js)
let hoy = new Date();
//cogemos el mes
let mesActual =  hoy.getMonth();
//cogemos el año
let anyActual = hoy.getFullYear();
// llamada al año a coger en html
let viewYear = document.getElementById("year");
// viewYear.value = anyActual;
// let agafarAny = viewYear.value;
// mismo con los meses
let viewMonth = document.getElementById("month");
 //viewMonth.value = mesActual;
// let agafarMes = viewMonth.value;
//array de meses
let months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
//array dias
// let listaDias = [
//     'Lunes',
//     'Martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes',
//     'Sábado',
//     'Domingo',
// ];
//llamada a los elementos del html

let mesIAny = document.getElementById("mesIAny");
mostarCalendario(mesActual, anyActual);
// you don't
function previous(){
    anyActual = (mesActual == 0) ? anyActual - 1 : anyActual;
    mesActual = (mesActual == 0) ? 11 : mesActual - 1;
    mostarCalendario(mesActual, anyActual);
    // if(mesActual == 0) {
    //   anyActual = anyActual - 1;
    //   mesActual = 11;
    // } else {
    //   mesActual = mesActual - 1;
    // }
    // mostarCalendario(mesActual, anyActual);
}
// you don't
    function next(){
       anyActual = (mesActual == 11) ? anyActual + 1 : anyActual;
       mesActual = (mesActual + 1) % 12;
      mostarCalendario(mesActual, anyActual);
    // if (mesActual == 11) {
    //   anyActual = anyActual + 1;
    //   mesActual = 0;
    // } else {
    //     mesActual = mesActual + 1;
    // }
    // mostarCalendario(mesActual, anyActual);

    }
// you don't
    function jumpMonth(){
      //  anyActual = parseInt(agafarAny);
      //  mesActual = parseInt(agafarMes);
        mesActual = parseInt(viewMonth.value);
        mostarCalendario(mesActual, anyActual);
    }
    function jumpYear() {
      // anyActual = parseInt(agafarAny);
      anyActual = parseInt(viewYear.value);
        mostarCalendario(mesActual, anyActual);
    }
// you work
function mostarCalendario(month, year){
    let primerDia =  new Date(year, month).getDay() - 1; // it begun on sunday in english, thus -1 to start on monday
    let diasDelMes = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    //qué escribimos en el

    tbl.innerHTML = "";
    //
    mesIAny.innerHTML = months[month] + " " + year;
    // agafarAny.value = year;
    // agafarMes.value = month;
    //anyActual = year;
  //  mesActual = month;
//celdas
    // desde donde comenzar el mes
    let date = 1;
  //row
    for(let i = 0; i < 6; i++){
        let row = document.createElement("tr");
//dias
        for(let j = 0; j < 7; j++){

            if( i === 0 && j < primerDia) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);

            } else if(date > diasDelMes) {
                break;
            } else {
                let cell = document.createElement( "td");
                let cellText = document.createTextNode(date);
                if(date === hoy.getDate() && year === hoy.getFullYear() && month === hoy.getMonth()){
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;

            }

        }
        tbl.appendChild(row);
    }
}
