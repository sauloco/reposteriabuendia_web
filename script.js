window.addEventListener('load', onLoad);

//Hola Pame bbcita mi amorrrrrrr... florchu te lovea fuerte<3
//TE AMOO BEBEEEEE

function onLoad() {
  const quienLoAbre = new URL(location.href).searchParams.get('name');
  document.querySelector('h2').innerHTML = `Bienvenido: ${quienLoAbre}`;
}

