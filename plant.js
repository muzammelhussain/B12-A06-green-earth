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
        <li id ="cat-id-${category.id}" onclick= "loadItems(${category.id})" class="active cat-act hover:bg-gray-700 px-3 py-1 rounded">
                ${category.category_name}
              </li>
        `;
        categoriesContainer.append(categoriesList);
    }
}

loadCategories();

 //fetching the items from url

 const loadItems = async (id)=> {
  manageSpinner(true);
  removeActive();
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategorieItems(data.plants);
 }



// load all items
 const loadAllItems = async ()=> {
    const url = "https://openapi.programming-hero.com/api/plants";
    const res = await fetch(url);
    const data = await res.json();
    
    displayCategorieItems(data.plants);
 }

 loadAllItems();
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
          <div class="card bg-base-100 w-auto shadow-sm" id="${plant.id}" onClick ="plantDetails(${plant.id})">
           
                <div class="px-3 pt-5">
                  <img
                    src= ${plant.image}
                    alt=""
                    class="rounded-xl h-[300px] w-full mx-auto"
                  />
                </div>
                <div class="p-6 space-y-3">
                  <h2 class="card-title">${plant.name}</h2>
                  <p>
                    ${plant.description}
                  </p>
                  <div class="flex justify-between items-center">
                    <h1 class="py-1 px-4 rounded-full bg-[#CFF0DC] text-[#15803D]">${plant.category}</h1>
                    <p class="font-bold"> ৳${plant.price}</p>
                  </div>
                  <div class="card-actions">
                    <button class="btn  w-full bg-[#15803D] text-white rounded-full"   onClick="addToCart('${plant.name}', ${plant.price})">Add to Cart</button>
                  </div>
                </div>
              </div>
        `;
        plantsContainer.append(plantDiv);

        //console.log(plant)
    });
   manageSpinner(false);
}


//get plant details function

const plantDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantDetails(details.plants);
};

//set plant details in UI
const displayPlantDetails = (plant) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div>
      <h2 id ="name" class="font-bold">${plant.name}</h2>
      <div class="px-3 pt-5">
                  <img
                    src= ${plant.image}
                    alt=""
                    class="rounded-xl h-[300px] w-full mx-auto"
                  />
                </div>
                <div class="p-6 space-y-3">
                   <h1 > <span class="font-bold">Category:</span> ${plant.category}</h1>
                  <p id="price"> <span class="font-bold">Price:</span>৳${ plant.price}</p>
                  <p>
                    <span class="font-bold">Description:</span> ${ plant.description}
                  </p>
                
                </div>     
  </div>
  `;
  document.getElementById("plant_modal").showModal();
};



// spinner function
const manageSpinner = (status, time = 2000) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plants-dom").classList.add("hidden");
    setTimeout(() => {
      document.getElementById("spinner").classList.add("hidden");
      document.getElementById("plants-dom").classList.remove("hidden");
    }, 2000);
  }
};


//add to cart

const addToCart=(name, price)=>{
const cartDiv = document.getElementById("cart-section");
const cartItem = document.createElement(`
                <div class="flex justify-between items-center bg-[#DCFCE7] py-3 px-2 rounded-2xl">
              <div class="pl-1">
                <h1 class="font-bold">'${name}'</h1>
                <p><span>৳${price} × 1</span></p>
              </div>
              <div>
                <button><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
  `
);

cartDiv.append(cartItem);
 console.log(name,price)
}

//remove activation function
const removeActive = () => {
  const activeCat = document.querySelectorAll(".cat-act");
  activeCat.forEach((cat) => cat.classList.remove(".active"));
};



