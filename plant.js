//fetching the categories from url
const loadCategories  = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/categories");
  const data = await res.json();
    displayCategories(data.categories);
}

// { id: 1, category_name: "Fruit Tree", small_description: "Trees that bear edible fruits like mango, guava, and jackfruit." }

// adding the categories in UI
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-dom");
    //categoriesContainer.innerHTML =""
    for (const category of categories) {
        const categoriesList = document.createElement("li");
        categoriesList.innerHTML =`
        <li id ="cat-id-${category.id}" onclick= "loadItems(${category.id})" class="bg-green-700 text-white px-3 py-1 rounded">
                ${category.category_name}
              </li>
        `;
        categoriesContainer.append(categoriesList);
    }
}

loadCategories();

 //fetching the items from url

 const loadItems = async (id)=> {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategorieItems(data.plants);
 }




// category: "Evergreen Tree"
// ​
// description: "A tall, dense evergreen tree often planted for privacy screens. Its wood is resistant to decay and pests."
// ​
// id: 17
// ​
// image: "https://i.ibb.co.com/YTJjYcGX/cypress-min.jpg"
// ​
// name: "Cypress"
// ​
// price: 1300

// adding the words in UI
const displayCategorieItems = (plants) => {
    const plantsContainer = document.getElementById("plants-dom");
    plantsContainer.innerHTML = "";
    plants.forEach(plant => {
        const  plantDiv = document.createElement("div");
        plantDiv.innerHTML = `
          <div class="card bg-base-100 w-auto shadow-sm" id="${plant.id}">
                <div class="px-3 pt-5">
                  <img
                    src= ${plant.image}
                    alt=""
                    class="rounded-xl h-[300px] w-full mx-auto"
                  />
                </div>
                <div class="p-6 space-y-3">
                  <h2 class="card-title">${plant.category}</h2>
                  <p>
                    ${plant.description}
                  </p>
                  <div class="flex justify-between items-center">
                    <h1 class="py-1 px-4 rounded-full bg-[#CFF0DC] text-[#15803D]">${plant.name}</h1>
                    <p class="font-bold">${plant.price}</p>
                  </div>
                  <div class="card-actions">
                    <button class="btn  w-full bg-[#15803D] text-white rounded-full">Add to Cart</button>
                  </div>
                </div>
              </div>
        `;
        plantsContainer.append(plantDiv);

        console.log(plant)
    });
   
}
