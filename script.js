window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
}

const recetas = [
  {
    imagen: 'images/recipes/cheescake.jpg',
    nombre: 'Cheescake',
    ingredientes: ['200g. harina', 'blablabla'],
    modal: 'modalCheescake',
    preparacion: '',
  },
  {
    imagen: 'images/recipes/panqueques.jpg',
    nombre: 'Panqueques',
    ingredientes: [''],
    modal: 'modalPanqueques',
    preparacion: '',
  },
  {
    imagen: 'images/recipes/chocotorta.jpg',
    nombre: 'Chocotorta',
    ingredientes: ['200g. harina', 'blablabla'],
    modal: 'modalChocotorta',
    preparacion: '', 
  }
];

function creaRecetas() {
  for (const receta of recetas) {
    const {imagen, nombre, modal, preparacion, ingredientes} = receta;

    let textoIngredientes = '';
    for (const ingrediente of ingredientes) {
      textoIngredientes = textoIngredientes + `<li>${ingrediente}</li>`
    }
    
    const objetoCard = `<div class="card horizontal">
      <div class="card-image">
        <img src="${imagen}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h3>${nombre}</h3>                     
          <p>Ingredientes                        
            <ul>
              ${textoIngredientes}
            </ul>
          </p>
        </div>
        <div class="card-action">
          <a href="#${modal}" class='modal-trigger'>Ver más</a>
        </div>
      </div>
    </div>`

    const objetoModal = `<div id="${modal}" class="modal">   
      <div class="modal-content">
        <h4>${nombre}</h4>    
        ${preparacion}
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>`

    // TODO: Agregar al BODY del HTML en el lugar correcto objetoCard y objetoModal

  }
}