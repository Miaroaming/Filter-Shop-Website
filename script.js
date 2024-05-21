const shoes = [{
    id: 1,
    name: "Old Fashioned Chic Platform Boots",
    type: "Knee High Boots, Platforms",
    price: "$255.00",
    image1: "./images/flowerboots.webp",
    image2: "./images/flowerboots2.webp",
    image3: "./images/flowerboots3.webp"
},
{
    id: 2,
    name: "Sharp Sheriff Shine Cowboy Boots - Silver",
    type: "Glitzy",
    price: "$235.00",
    image1: "./images/cowboy.webp",
    image2: "./images/cowboy2.webp",
    image3: "./images/cowboy3.webp"
},
{
    id: 3,
    name: "Snuggle Wonderland Platform Boots - Pink",
    type: "Cutesy, Platforms",
    price: "$205.00",
    image1: "./images/cutepink1.webp",
    image2: "./images/cutepink2.webp",
    image3: "./images/cutepink3.webp"
},
{
    id: 4,
    name: "Blushin' n' Crushin' Marabou Heels - Lime Green",
    type: "Cutesy, Platforms",
    price: "$118.00",
    image1: "./images/greenfluff.webp",
    image2: "./images/greenfluff2.webp",
    image3: "./images/greenfluff3.webp"
},
{
    id: 5,
    name: "Scandalous Seduction Heeled Boots - Black",
    type: "Alternative Style, Knee High Boots",
    price: "$237.00",
    image1: "./images/witch1.webp",
    image2: "./images/witch2.webp",
    image3: "./images/witch3.webp"
},
{
    id: 6,
    name: "Sharp Sheriff Shine Cowboy Boots - Red",
    type: "Glitzy, Kooky",
    price: "$235.00",
    image1: "./images/redcowboy.webp",
    image2: "./images/redcowboy2.webp",
    image3: "./images/redcowboy3.webp"
},
{
    id: 7,
    name: "Bubblegum Obsidian Pocket Combat Boots",
    type: "Cutesy, Knee High Boots",
    price: "$201.00",
    image1: "./images/pinkcombat1.webp",
    image2: "./images/pinkcombat2.webp",
    image3: "./images/pinkcombat3.webp"
},
{
    id: 8,
    name: "Zuri Metallic Snow Ankle Boots - Silver",
    type: "Kooky, Cutesy",
    price: "$40.00",
    image1: "./images/silverpuff.webp",
    image2: "./images/silverpuff2.webp",
    image3: "./images/silverpuff3.webp"
},
{
    id: 9,
    name: "Metamorphic Butterfly Boots - Silver",
    type: "Kooky, Cutesy, Glitzy",
    price: "$300.00",
    image1: "./images/butterfly.webp",
    image2: "./images/butterfly2.webp",
    image3: "./images/butterfly3.webp"
},
{
    id: 10,
    name: "How Sweet It Is Combat Boots - Black/Pink",
    type: "Kooky, Cutesy, Platforms",
    price: "$189.00",
    image1: "./images/swirl.webp",
    image2: "./images/swirl2.webp",
    image3: "./images/swirl3.webp"
},
{
    id: 11,
    name: "Holy Revelation Platform Heels - Pink",
    type: "Cutesy, Platforms, Glitzy",
    price: "$216.00",
    image1: "./images/pinkchain.webp",
    image2: "./images/pinkchain2.webp",
    image3: "./images/pinkchain3.webp"
},
{
    id: 12,
    name: "Happy Daze Platforms",
    type: "Kooky, Platforms",
    price: "$173.00",
    image1: "./images/rainbow.webp",
    image2: "./images/rainbow2.webp",
    image3: "./images/rainbow3.webp"
},
{
    id: 13,
    name: "Traitor Boots - Pink Fur",
    type: "Kooky, Platforms, Cutesy",
    price: "$112.00",
    image1: "./images/fur.webp",
    image2: "./images/fur2.webp",
    image3: "./images/fur3.webp"
},
{
    id: 14,
    name: "It’s Always Greener Platform Mary Janes",
    type: "Kooky, Platforms, Cutesy",
    price: "$96.00",
    image1: "./images/grass.webp",
    image2: "./images/grass2.webp",
    image3: "./images/grass3.webp"
},
{
    id: 15,
    name: "Glam Life Ankle Boots",
    type: "Cutesy, Glitzy",
    price: "$30.00",
    image1: "./images/purple.webp",
    image2: "./images/purple2.webp",
    image3: "./images/purple3.webp"
},
{
    id: 16,
    name: "Psychedelic Fairytale Double Stack Traitor Boots - White",
    type: "Cutesy, Kooky, Platforms",
    price: "$253.00",
    image1: "./images/mushroom.webp",
    image2: "./images/mushroom2.webp",
    image3: "./images/mushroom3.webp"
},
{
    id: 17,
    name: "Love at Every Corner Platform Heels - White",
    type: "Cutesy, Platforms, Glitzy",
    price: "$196.00",
    image1: "./images/blueprint.webp",
    image2: "./images/blueprint2.webp",
    image3: "./images/blueprint3.webp"
},
{
    id: 18,
    name: "Witty Persuaions Platform Sandals",
    type: "Cutesy, Platforms, Glitzy",
    price: "$194.00",
    image1: "./images/blueruffle.webp",
    image2: "./images/blueruffle2.webp",
    image3: "./images/blueruffle3.webp"
},
{
    id: 19,
    name: "Carefree Muse Platform Sandals - Green",
    type: "Cutesy, Platforms",
    price: "$251.00",
    image1: "./images/limesandals.webp",
    image2: "./images/limesandals2.webp",
    image3: "./images/limesandals3.webp"
},
{
    id: 20,
    name: "Carefree Muse Platform Sandals - Green",
    type: "Cutesy, Platforms",
    price: "$251.00",
    image1: "./images/limesandals.webp",
    image2: "./images/limesandals2.webp",
    image3: "./images/limesandals3.webp"
},

];

// get input elements 
// - our filters
const typeFilter = document.getElementById("type");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
// - our sorting buttons
const highToLowBtn = document.getElementById('price-high-to-low-btn');
const lowToHighBtn = document.getElementById('price-low-to-high-btn');
const alphabeticalBtn = document.getElementById('alphabetical-btn');

// ------------*********** CLICK FUNCTIONS ***********------------
//onchange event on each filter:
//location
typeFilter.addEventListener("change", function () {
console.dir(typeFilter.value);
filterAndPopulateResults();
});

//price min
priceMin.addEventListener("change", function () {
console.dir(priceMin.value);
filterAndPopulateResults();
});

//price max
priceMax.addEventListener("change", function () {
console.dir(priceMax.value);
filterAndPopulateResults();
});

//  ------------ Sorting Button Clicks: --------
highToLowBtn.addEventListener('click', function() {
const filteredShoes = filterShoes();
const sortedShoes = sortShoesByPriceHighToLow(filteredShoes); // sorting filtered properties by price high to low
populateResults(sortedShoes);
});

lowToHighBtn.addEventListener('click', function() {
const filteredShoes = filterShoes();
const sortedShoes = sortShoesByPriceLowToHigh(filteredShoes); // sorting filtered properties by price low to high
populateResults(sortedShoes);
});

alphabeticalBtn.addEventListener('click', function() {
const filteredShoes = filterShoes();
const sortedShoes = sortShoesAlphabetical(filteredShoes); // sorting filtered properties by name alphabetically
populateResults(sortedShoes);
});


// ------------********* FILTERING FUNCTIONS & LOGIC *********----------
//filter results - return an array of filtered properties
function filterShoes() {
const filteredShoes = shoes.filter(shoe => {
    // check if location matches
    const shoeType = shoe.type.toLowerCase();
    const filterValue = typeFilter.value.toLowerCase();
    // that it doesnt match so it returns false and doesnt add to the array
    if (filterValue && !shoeType.includes(filterValue)) {
        // if property location doesnt include the filter value return false
        return false;
    }

    // Check if the price falls within the specificed range
    const priceValue = parseFloat(shoe.price.replace(/\$/g, '').replace(/./g, '')); // removes $ and , from price and make the number a floating number
    const minPrice = parseFloat(priceMin.value);
    const maxPrice = parseFloat(priceMax.value);
    if ((minPrice && priceValue < minPrice) || (maxPrice && priceValue > maxPrice)) {
        return false
    }
    //if all conditions pass, include the proper in the filtered array
    return true;
});

// retrun the filtered propertied array - can access outside
return filteredShoes;
}

// ------------ SORT FUNTCIONS --------------
// sort results - sort by price - lowest to highest
function sortShoesByPriceLowToHigh(shoes) {
return shoes.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
    const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
    return priceA - priceB;
})
}

// sort results - sort by price - high to low
function sortShoesByPriceHighToLow(shoes) {
return shoes.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
    const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
    return priceB - priceA;
})
}

// Sort by name alphabetically
function sortShoesAlphabetical(shoes) {
return shoes.sort((a,b) => {
    const nameA = a.name.toLowerCase(); // property a name to lowercase
    const nameB = b.name.toLowerCase(); // property b name to lowercase
    return nameA.localeCompare(nameB);
})
}


// ------------************* POPULATION FUNCTIONS *************------------
// Filter and then Populate Results
function filterAndPopulateResults() {
const filteredShoes = filterShoes();
//sort properties before populating:
// const sortedProperties = sortPropertiesByPrice(filteredProperties); //sorting the filtered properties from previous line
populateResults(filteredShoes);
}

// Initial population of cards
filterAndPopulateResults();

//populate cards function
function populateResults(filteredResults) {
// get the results div
const resultsDiv = document.getElementById("results");
// clear previous results
resultsDiv.innerHTML = "";

// check if filtered properties is empty
if (filteredResults.length === 0) {
    resultsDiv.innerHTML = `<p class="no-results">No Results Found</p>`
} else {
    // if filtered results is not empty
    filteredResults.forEach(shoe => {
        //create a card for that property
        const shoeCardHTML = `
        <div class="shoe">
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${shoe.image1}" alt="${shoe.name} image 1" class="shoe-image" value=${shoe.id}></div>
                    <div class="swiper-slide"><img src="${shoe.image2}" alt="${shoe.name} image 2" class="shoe-image" value=${shoe.id}></div>
                    <div class="swiper-slide"><img src="${shoe.image3}" alt="${shoe.name} image 3" class="shoe-image" value=${shoe.id}></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="shoe-details">
                <h2>${shoe.name}</h2>
                <p>${shoe.type}</p>
                <div class="more-details">
                    <h4>${shoe.price}</h4>
                </div>
            </div>
        </div>
        `;
        resultsDiv.innerHTML += shoeCardHTML;

         // // Re-initialize Swiper Instances
        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiperEl => {
            new Swiper(swiperEl, {
                direction: 'vertical',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            })
        });
    });
}
};
