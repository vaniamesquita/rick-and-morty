 //contador
  const personagensContador = document.querySelector("#personagens");
  const locationContador = document.querySelector("#locais");
  const episodiosContador = document.querySelector("#episodios");
  
  
  function rickAndMortyGet(param) {
    return axios.get(`https://rickandmortyapi.com/api/${param}`);
  }
  
  preencherContadores();
  
 
  function preencherContadores() {
    Promise.all([
      rickAndMortyGet("character/"),
      rickAndMortyGet("location/"),
      rickAndMortyGet("episode/"),
     
    ]).then((results) => {
      personagensContador.innerHTML = results[0].data.info.count;
      locationContador.innerHTML = results[1].data.info.count;
      episodiosContador.innerHTML = results[2].data.info.count;
     
    });
  }