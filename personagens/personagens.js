//personagens

  fetch(`https://rickandmortyapi.com/api/character`, {
            method: "GET"
        })
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            const personagens = document.querySelector(".personagens-container")
            json.results.map((results) => {
                personagens.innerHTML += `
                <div class="card-personagem"> <img src=`+ results.image + ` > 
                <div class="card-info">
                <h3>  ` + results.name +`  </h3> 
                <p> <strong>Espécie:</strong> ` + results.species +`</p> 
                <p> <strong>Origem:</strong> ` + results.origin.name +`</p> 
                <p> <strong>Location:</strong> ` + results.location.name +`</p> 
                <p> <strong>Status:</strong> ` + results.status +`</p> 

                </div></div>
                
                
                `
            })
        })