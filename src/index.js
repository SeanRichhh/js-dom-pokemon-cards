
/* <li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
// </li> */
const listEl = document.querySelector(".cards")

// for(let i = 0 ; i < data.length ; i++){
//   const pokemonData = data[i]
// }
// Same out come just different way
data.forEach(pokemonData => {
  //Create the card element 
  const cardElement = document.createElement("li")
  cardElement.setAttribute("class", "card")
  //create the card heading
  const cardHeading = document.createElement("h2")
  cardHeading.setAttribute("class", "card--title")
  cardHeading.innerText = pokemonData.name
  cardElement.append(cardHeading)

  //create Image
  const image = document.createElement("img")
  image.setAttribute("width", "256")
  image.setAttribute("class", "card--img")
  image.setAttribute("src", pokemonData.sprites.other["official-artwork"].front_default)
  cardElement.append(image)
  
  //create stats 
  const statsList = document.createElement("ul")
  statsList.setAttribute("class", "card--text")
  
  const statItem1 = document.createElement("li")
  statItem1.innerText = "HP: " + pokemonData.stats[0].base_stat
  statsList.append(statItem1)
  
  const statItem2 = document.createElement("li")
  statItem2.innerText = "ATTACK: " + pokemonData.stats[0].base_stat
  statsList.append(statItem2)
  
  const statItem3 = document.createElement("li")
  statItem3.innerText = "DEFENSE: " + pokemonData.stats[0].base_stat
  statsList.append(statItem3)
  
  const statItem4 = document.createElement("li")
  statItem4.innerText = "SPECIAL-ATTACK: " + pokemonData.stats[0].base_stat
  statsList.append(statItem4)

  const statItem5 = document.createElement("li")
  statItem5.innerText = "SPECIAL-DEFENSE: " + pokemonData.stats[0].base_stat
  statsList.append(statItem5)
  
  const statItem6 = document.createElement("li")
  statItem6.innerText = "SPEED: " + pokemonData.stats[0].base_stat
  statsList.append(statItem6)
  
  cardElement.append(statsList)
  
  
  //last thing to happen
  listEl.append(cardElement)

});
