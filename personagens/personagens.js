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
                <strong>  ` + results.name +`  </strong> 
                <p> Espécie: ` + results.species +`</p> 
                <p> Origem: ` + results.origin.name +`</p> 
                <p> Location: ` + results.location.name +`</p> 
                <p> Status: ` + results.status +`</p> 

                </div></div>
                
                
                `
            })
        })