function geteleid(item1, data2) {
  document.getElementById(item1).innerText = data2;
}

const select = document.getElementById("lang")
select.addEventListener("change", function () {
  const idm = this.value;

  if (idm === "eng") {
    geteleid("aid1", "About Me");
    geteleid("aid2", "Interests");
    geteleid("aid3", "Hobbies");
    geteleid("aid4", "Favorite Games");
    geteleid("aid6", "Current Projects");
    geteleid("aid5", "Social Media");
  } else {
    geteleid("aid1", "Sobre Mi");
    geteleid("aid2", "Intereses");
    geteleid("aid3", "Pasatiempos");
    geteleid("aid4", "Juegos Favoritos");
    geteleid("aid6", "Proyectos Actuales");
    geteleid("aid5", "Redes Sociales");
  }
});