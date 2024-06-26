const shoes = [
{
    id: 1,
    name: "Love at Every Corner Platform Heels - White",
    type: "Cutesy, Platforms, Glitzy",
    price: "$196.00",
    image1: "./images/blueprint2.webp",
    image2: "./images/blueprint.webp",
    image3: "./images/blueprint3.webp"
},
{
    id: 2,
    name: "Witty Persuaions Platform Sandals",
    type: "Cutesy, Platforms, Glitzy",
    price: "$194.00",
    image1: "./images/blueruffle2.webp",
    image2: "./images/blueruffle.webp",
    image3: "./images/blueruffle3.webp"
},
{
    id: 3,
    name: "Carefree Muse Platform Sandals - Green",
    type: "Cutesy, Platforms",
    price: "$251.00",
    image1: "./images/limesandals2.webp.webp",
    image2: "./images/limesandals.webp",
    image3: "./images/limesandals3.webp"
},
{
    id: 4,
    name: "Snuggle Wonderland Platform Boots - Pink",
    type: "Cutesy, Platforms",
    price: "$205.00",
    image1: "./images/cutepink1.webp",
    image2: "./images/cutepink.webp",
    image3: "./images/cutepink4.webp"
},
{
    id: 5,
    name: "Old Fashioned Chic Platform Boots",
    type: "Knee High Boots, Platforms",
    price: "$255.00",
    image1: "./images/flowerboots2.webp",
    image2: "./images/flowerboots.webp",
    image3: "./images/flowerboots3.webp"
},
{
    id: 6,
    name: "Sheriff Shine Cowboy Boots - Ziggy",
    type: "Glitzy, Kooky",
    price: "$263.00",
    image1: "./images/ziggy2.webp",
    image2: "./images/ziggy.webp",
    image3: "./images/ziggy3.webp"
},
{
    id: 7,
    name: "Lexus Platform Boots - Blue",
    type: "Glitzy, Platforms",
    price: "$145.00",
    image1: "./images/shinyblue2.webp",
    image2: "./images/shinyblue.webp",
    image3: "./images/shinyblue3.webp"
},
{
    id: 8,
    name: "Blushin' n' Crushin' Marabou Heels - Lime Green",
    type: "Cutesy, Platforms",
    price: "$118.00",
    image1: "./images/greenfluff2.webp.webp",
    image2: "./images/greenfluff.webp",
    image3: "./images/greenfluff3.webp.webp"
},
{
    id: 9,
    name: "Scandalous Seduction Heeled Boots - Black",
    type: "Knee High Boots",
    price: "$237.00",
    image1: "./images/witch1.webp",
    image2: "./images/witch.webp",
    image3: "./images/witch3.webp"
},
{
    id: 10,
    name: "Sharp Sheriff Shine Cowboy Boots - Red",
    type: "Glitzy, Kooky",
    price: "$235.00",
    image1: "./images/redcowboy1.webp",
    image2: "./images/redcowboy.webp",
    image3: "./images/redcowboy3.webp"
},
{
    id: 11,
    name: "Bubblegum Obsidian Pocket Combat Boots",
    type: "Cutesy, Knee High Boots",
    price: "$201.00",
    image1: "./images/pinkcombat2.webp",
    image2: "./images/pinkcombat1.webp",
    image3: "./images/pinkcombat3.webp"
},
{
    id: 12,
    name: "Zuri Metallic Snow Ankle Boots - Silver",
    type: "Kooky, Cutesy",
    price: "$40.00",
    image1: "./images/silverpuff2.webp",
    image2: "./images/silverpuff.webp",
    image3: "./images/silverpuff3.webp"
},
{
    id: 13,
    name: "Metamorphic Butterfly Boots - Silver",
    type: "Kooky, Cutesy, Glitzy",
    price: "$300.00",
    image1: "./images/butterfly2.webp",
    image2: "./images/butterfly.webp",
    image3: "./images/butterfly3.webp"
},
{
    id: 14,
    name: "How Sweet It Is Combat Boots - Black/Pink",
    type: "Kooky, Cutesy, Platforms",
    price: "$189.00",
    image1: "./images/swirl2.webp",
    image2: "./images/swirl.webp",
    image3: "./images/swirl3.webp"
},
{
    id: 15,
    name: "Holy Revelation Platform Heels - Pink",
    type: "Cutesy, Platforms, Glitzy",
    price: "$216.00",
    image1: "./images/pinkchain2.webp",
    image2: "./images/pinkchain.webp",
    image3: "./images/pinkchain3.webp"
},
{
    id: 16,
    name: "Happy Daze Platforms",
    type: "Kooky, Platforms",
    price: "$173.00",
    image1: "./images/rainbow2.webp",
    image2: "./images/rainbow.webp",
    image3: "./images/rainbow3.webp"
},
{
    id: 17,
    name: "Camel-223 Platform Boots - Light Purlpe",
    type: "Cutesy, Platforms, Knee High Boots",
    price: "$240.00",
    image1: "./images/purpleplat1.webp",
    image2: "./images/purpleplat2.webp",
    image3: "./images/purpleplat3.webp"
},
{
    id: 18,
    name: "Traitor Boots - Pink Fur",
    type: "Kooky, Platforms, Cutesy",
    price: "$112.00",
    image1: "./images/fur2.webp",
    image2: "./images/fur.webp",
    image3: "./images/fur3.webp"
},
{
    id: 19,
    name: "Glam Life Ankle Boots",
    type: "Cutesy, Glitzy",
    price: "$30.00",
    image1: "./images/purple2.webp",
    image2: "./images/purple.webp",
    image3: "./images/purple3.webp"
},
{
    id: 20,
    name: "Psychedelic Fairytale Double Stack Traitor Boots - White",
    type: "Cutesy, Kooky, Platforms",
    price: "$253.00",
    image1: "./images/mushroom2.webp",
    image2: "./images/mushroom.webp",
    image3: "./images/mushroom3.webp"
}
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



// ------------- MAPBOX ---------------
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

//  Initialise your map
const map = new mapboxgl.Map({
    container: 'map', // id of the container you are placing the map into
    style: 'mapbox://styles/mapbox/streets-v11', // style url - set up in the dashboard (streets version)
    center: [174.78226525319212, -41.27408640732607], // starting position of the map [lng,lat] (remember to flip from google)
    zoom: 18 // starting zoom level
});

// set map container dimensions to match its parents
map.on('load', function() {
    map.resize();
})

// Get the marker element from the html:
const customMarker1 = document.getElementById('custom-marker1');

// Add Markers to your Map:
new mapboxgl.Marker(customMarker1)
    .setLngLat([174.78226525319212, -41.27408640732607])
    // add property details to the marker
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML("<img src='hobson.png' alt=''><h3>Mimi's Shop</h3><p>8 Hobson Street, Thorndon, Wellington</p>"))
    .addTo(map);

// Fly To
function flyToLocation(location, zoom) {
    map.flyTo({
        center: location,
        zoom: zoom,
        essential: true // ignore prefers-reduced-motion
    });
}

const shopFlyTo = document.getElementById('fly-to-shop');

shopFlyTo.addEventListener('click', function() {
    flyToLocation([174.78226525319212, -41.27408640732607], 12);
})