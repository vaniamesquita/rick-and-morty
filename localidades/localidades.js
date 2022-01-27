 

fetch(`https://rickandmortyapi.com/api/location/`, {
    method: "GET"
})
.then(response => response.json())
.then((json) => {
    console.log(json)
    const locations = document.querySelector("#table")
    json.results.map((results) => {
        locations.innerHTML += `
       <tr> 
        
        <td>  ` + results.name +`</td> 
        <td>  ` + results.type +`</td> 
        <td>  ` + results.dimension +`</td> 
        <td>  ` + results.residents.length +`</td> 
        
        </tr>
        
        
        `
    })
})