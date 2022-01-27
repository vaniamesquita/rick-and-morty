 

fetch(`https://rickandmortyapi.com/api/episode/`, {
    method: "GET"
})
.then(response => response.json())
.then((json) => {
    console.log(json)
    const episodios = document.querySelector("#table")
    json.results.map((results) => {
        episodios.innerHTML += `
       <tr> 
        
        <td>  ` + results.name +`</td> 
        <td>  ` + results.air_date +`</td> 
        <td>  ` + results.episode +`</td> 
        <td>  ` + results.characters.length +`</td> 
        
        </tr>
        
        
        `
    })
})