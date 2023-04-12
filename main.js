//Constantes del juego
const COLUMNAS = 5;
const FILAS = 5;
const CANTIDAD_MINAS = 1;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

 

  casillerosSinDescubrir= COLUMNAS * FILAS ;
  ponerMinasTablero();
  // Modificar/completar
}


function draw() {
  if (hizoClick == true)
  {
    console.log("fila:" +filaPresionada + " col " + columnaPresionada);
    if (mouseButton == LEFT)
    {
      if (tieneMinaCasillero(columnaPresionada,filaPresionada)){
        pintarCasillero(columnaPresionada,filaPresionada,COLOR_CASILLERO_CON_MINA)
        perder();        
      }
      else {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); 
        descubrirCasillero(columnaPresionada, filaPresionada);
      }
      
         
    }
    if (mouseButton == RIGHT) {
      pintarCasillero(columnaPresionada, filaPresionada,COLOR_CASILLERO_MARCADO ); 
    }

    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
  if (ganoElJuego() == true){
    ganar ()
  }

}


function ganoElJuego()
{
  if (casillerosSinDescubrir==CANTIDAD_MINAS){
    return true;
  }  
  else {
    return false;
  } 
}

//esta funcion coloca en es tablero la cantidad de minas que se le designe a CANT_MINAS, la posicion si sera aleatoria 
function ponerMinasTablero()
{
  for (let i=0; i<CANTIDAD_MINAS ;i++){
    let columna = Math.floor(Math.random()*COLUMNAS);
    let fila =Math.floor(Math.random()*FILAS);
    ponerMinaCasillero(columna ,fila);
    console.log (fila);
    console.log (columna);
  }
 
}

function mostrarMinas()
{
  // Modificar/completar
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}