window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  creaRecetas();
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems, {});
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
    ingredientes: [''],
    modal: 'modalCheescake',
    preparacion: [''],
  },
  {
    imagen: 'images/recipes/chocotorta.jpg',
    nombre: 'Chocotorta',
    ingredientes: [''],
    modal: 'modalChocotorta',
    preparacion: [''], 
  }
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
      <div class="card horizontal">
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

    const objetoModal = `<div id="${modal}" class="modal">   
      <div class="modal-content">
        <h3>${nombre}</h3>    
        <h4>Ingredientes</h4>
        <ul>
          ${textoIngredientes}
        </ul>
        <h4>Preparacion</h4>
        <p>${textoPreparacion}<p/> 
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>`;

    destinoCards.innerHTML += objetoCard;
    destinoModals.innerHTML += objetoModal;
  }
}