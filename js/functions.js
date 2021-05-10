//definimos new Date (nativo de js)
let hoy = new Date();
//cogemos el mes
let mesActual =  hoy.getMonth();
//cogemos el año
let anyActual = hoy.getFullYear();
// llamada al año a coger en html
let viewYear = document.getElementById("year");
// mismo con los meses
let viewMonth = document.getElementById("month");
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

//llamada a los elementos del html
let mesIAny = document.getElementById("mesIAny");
mostarCalendario(mesActual, anyActual);

function previous(){
    anyActual = (mesActual == 0) ? anyActual - 1 : anyActual;
    mesActual = (mesActual == 0) ? 11 : mesActual - 1;
    mostarCalendario(mesActual, anyActual);
}

function next(){
       anyActual = (mesActual == 11) ? anyActual + 1 : anyActual;
       mesActual = (mesActual + 1) % 12;
      mostarCalendario(mesActual, anyActual);
    }

function jumpMonth(){
        mesActual = parseInt(viewMonth.value);
        mostarCalendario(mesActual, anyActual);
    }

function jumpYear() {
      anyActual = parseInt(viewYear.value);
        mostarCalendario(mesActual, anyActual);
    }

function mostarCalendario(month, year){
    let primerDia =  new Date(year, month).getDay() - 1; // it begun on sunday in english, thus -1 to start on monday
    let diasDelMes = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    //qué escribimos en el
    tbl.innerHTML = "";
    //
    mesIAny.innerHTML = months[month] + " " + year;
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
