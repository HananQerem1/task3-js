async function getRecipes(){
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    const result = await data.recipes;
    const finalResult = result.map(function(ele){
        return `
            <div class="recipe">
                <h2>${ele.title}</h2>
                <img src="${ele.image_url}" alt="${ele.title}">
            </div>
        `;
    }).join('');
    document.querySelector(".recipes").innerHTML = finalResult;
}
getRecipes();