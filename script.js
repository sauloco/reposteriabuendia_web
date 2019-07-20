window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  creaRecetas();
  
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems, {});
  if (obtenerDisponibilidad()){
    document.querySelector('.cerrado').classList.add('hide')
  }
}

const recetas = [
  {
    imagen: 'images/recipes/panqueques.jpg',
    nombre: 'Panqueques',
    ingredientes: ['2 huevos','220 gr. harina 0000','500 cc. leche'],
    modal: 'modalPanqueques',
    preparacion: ['En un bowls poner los huevos , revolver bien con batidor de alambre y agregar 100 gr. de harina, mezclar nuevamente y una vez unida la mezcla sumar 250 cc. de leche fría.','Continuar batiendo y agregar los 120 gr. de harina restante junto con el resto de la leche. Debe quedar una mezcla lisa y sin grumos.','En una sartén para panqueques o teflonada agregar media cucharadita de manteca, llevar sobre fuego fuerte haciéndola girar sobre la hornalla para que la manteca corra.'],
  },
  {
    imagen: 'images/recipes/cheescake.jpg',
    nombre: 'Cheescake',
    ingredientes: ['200 gr. galletitas dulces','150 gr. manteca','800 gr. queso crema','200 gr. azúcar','200 cc. crema de leche','21 gr. gelatina sin sabor','30 cc. de agua','1 cdita. de esencia de vainilla','200 gr. mermelada de frutos rojos','100 gr. frutos rojos'],
    modal: 'modalCheescake',
    preparacion: ['Mezclar las galletitas procesadas con la manteca derretida','Colocar en la base de un molde desmontable previamente enmantecado. Conservar en la heladera','En un bowl batir la crema con el azúcar, cuando esté apenas firme agregar el queso crema, la esencia de vainilla y batir un poco más','En un bowl pequeño colocar la gelatina con los 30 cc de agua, llevar al microondas por 30 segundos','Agregar a la mezcla de queso y crema, y batir enérgicamente hasta integrar bien',' Colocar la crema sobre la base de galletitas y enfriar por 4 horas','Una vez frío, desmoldar sobre un plato y colocar la mermelada con los frutos rojos en la superficie'],
  },
  {
    imagen: 'images/recipes/chocotorta.jpg',
    nombre: 'Chocotorta',
    ingredientes: ['500 gr de queso crema','500 gr de dulce de leche repostero','Cacao dulce c/n','Leche c/n','500 gr de galletas de chocolate'],
    modal: 'modalChocotorta',
    preparacion: ['Batir el dulce de leche con el queso crema hasta integrar','Preparar la chocolatada donde mojaremos nuestras galletas','Hacer una capa de galletas mojadas en chocolatada','Por encima colocar una capa de relleno','Hacer esto 3 veces más','Enfriar'], 
  },
  {
    imagen: 'images/recipes/lemonpie.jpg',
    nombre: 'Lemon Pie',
    ingredientes: ['360 gr galletitas dulces','280 gr manteca','4 yemas','1 limón','1 y 1/2 taza azúcar','4 claras'],
    modal: 'modalLemonPie',
    preparacion: ['Triturar las galletas','Derretir 100 gr de manteca y agregarlo a las galletas, hacer una mezcla y con esto forrar el fondo de un molde y llevar a la heladera','Colocar en un bol las 4 yemas, la taza de azúcar, 100 gr manteca y el jugo del limón. Llevar al fuego sin dejar de remover hasta que espese','Poner esta mezcla encima de las galletas esparcirlo bien y llevar a la heladera','Batir las claras con el azúcar restante hasta obtener un merengue a punto nieve y poner sobre la preparación'],
  },
  {
    imagen: 'images/recipes/bizcochuelo.jpg',
    nombre: 'Bizcochuelo',
    ingredientes: ['200 gr azúcar','200 gr harina','6 huevos','2 cds polvo de hornear','esencia de vainilla a gusto'],
    modal: 'modalBizcochuelo',
    preparacion: ['Batir los huevos junto con el azúcar y la esencia de vainilla, hasta integrar todo','Vierta en la preparación anterior la harina tamizada, el polvo de hornear','Precaliente el horno a 180º','Enmanteque y enharine un molde de torta de 24 cm','Coloque la preparación y cocine durante 25 minutos a horno moderado','Desmolde deje enfriar. Luego corte en porciones y sirva'],
  },
  {
    imagen: '',
    nombre: '',
    ingredientes: [''],
    modal: '',
    preparacion: [''],
  },
  {
    imagen: 'images/recipes/tiramisu.jpg',
    nombre: 'Tiramisú',
    ingredientes: ['250 gr crema de leche','250 gr queso mascarpone','1 cd extracto de vainilla','75 gr. de azúcar','vainillas','1 taza de café','4 cucharadas de licor','Cacao en polvo sin azúcar'],
    modal: 'modalTiramisu',
    preparacion: ['Mezclamos el mascarpone con el extracto de vainilla, y un par de cucharadas de café. Batimos hasta que la crema esté bien combinada. Entonces, la mezclamos con el azúcar y volvemos a batir hasta integrarla y montarla ligeramente','Montamos la crema de leche y la incorporamos a la crema anterior. Es importante hacerlo con movimientos de arriba hacia abajo para que la crema final no pierda volumen y consigamos esa textura fina y deliciosa. Reservamos este preparado en la nevera','Mezclamos el licor con el resto del café y mojamos las vainillas','Elegimos el molde o recipientes en los que vamos a servir el postre. Cubrimos con un fondo de vainillas y encima colocamos una capa de crema. Repetimos este proceso por lo menos una vez más, y tantas veces como nos permita el recipiente. Alisamos la última capa de crema y espolvoreamos el cacao en polvo sobre esta última capa de crema con ayuda de un colador','Tapamos con film transparente y refrigeramos unas horas para que el postre tome más sabor y quede más compacto'],
  },
];

function creaRecetas() {
  const destinoCards = document.querySelector('#recetas > .row');
  const destinoModals = document.querySelector('#destinoModals');

  for (const receta of recetas) {
    const {imagen, nombre, modal, preparacion, ingredientes} = receta;

    let textoIngredientes = '';
    let textoTresIngredientes = '';
    let cuenta = 0;
    for (const ingrediente of ingredientes) {
      textoIngredientes += `<li>${ingrediente}</li>`;
      cuenta = cuenta + 1;
      if (cuenta < 4) {
        textoTresIngredientes += `<li>${ingrediente}</li>`;
      }
    }

    let textoPreparacion = '';
    for (const paso of preparacion) {
      textoPreparacion += `<p>${paso}<p/>`; 
    }
    
    const objetoCard = `
    <div class="col s12 m6 l4">
      <div class="card small horizontal">
        <div class="card-image">
          <img src="${imagen}">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <h3>${nombre}</h3>                     
            <p>Ingredientes                        
              <ul>
                ${textoTresIngredientes}
              </ul>
            </p>
          </div>
          <div class="card-action">
            <a href="#${modal}" class='modal-trigger'>Ver más</a>
          </div>
        </div>
      </div>
    </div>`;

    const objetoModal = `
    <div id="${modal}" class="modal">   
      <div class="modal-content" style = "
        background-image: linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.22)),url('${imagen}');
        background-size: cover;
      ">
        <h3>${nombre}</h3>    
        <h4>Ingredientes</h4>
        <ul>
          ${textoIngredientes}
        </ul>
        <h4>Preparación</h4>
        <p>${textoPreparacion}<p/> 
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>`;

    destinoCards.innerHTML += objetoCard;
    destinoModals.innerHTML += objetoModal;
  }
}

function initMap () {
 var coordenadas = {
   lat:-36.905336, 
   lng:-60.319897,
 } 
 var map = new google.maps.Map (
    document.getElementById ('map'), 
    {
      zoom: 15, 
      center: coordenadas,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#cbf1f4"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "color": "#f9dbd3"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#f9dbd3"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
      ]
    }
  ) 
 var marker = new google.maps.Marker ({position: coordenadas, map: map})
  
}

/**
 * Objetivo: mostrar si ahora esta abierto o cerrado el local
 * 
 * Problemas a resolver:
 *  Saber la fecha y hora actual HECHO
 *  Saber los horarios del local HECHO
 *  Obtener abierto/cerrado HECHO
 *  Mostrar abierto/cerrado
 */
function obtenerHoraActual() {
  var f = new Date();
  var dow = f.getDay();
  var hour = f.getHours();
  return {dow, hour};
}

function obtenerDisponibilidad() {
  const {dow, hour} = obtenerHoraActual();
  const {manana, tarde} = horarios[dow];
  return ((manana && hour >= manana[0] && hour < manana[1]) || (tarde && hour >= tarde[0] && hour < tarde[1]));
}

const manana = [9, 13];
const tarde = [16, 20];
const diaNormal = {
  manana,
  tarde
}

const horarios = [
  {},
  diaNormal,
  diaNormal,
  diaNormal,   
  {
    manana,
    tarde: [16, 19]
  }, 
  diaNormal,
  {
    manana
  }
]
