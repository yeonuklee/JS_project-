const myMap = L.map("map");

const myBasemap = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
);

// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([-33.8679, 151.2175], 15);

// END SET UP MAP
class Information {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class Park extends Information {
  constructor(name, location, description, image) {
    super(name, location);
    this.Description = description;
    this.image = image;
  }
}

class Restaurant extends Information {
  constructor(name, location, cuisine, delivery, number, rating, image) {
    super(name, location);
    this.Cuisine = cuisine;
    (this.Delivery = delivery == true ? "Delivery ✓" : "Delivery ✘"),
      (this.Number = number);
    this.Rating = rating;
    this.image = image;
  }
}

const park = [
  new Park(
    "Royal Botanic Garden Sydney",
    [-33.86493425481815, 151.21687119291852],
    "Harbourside haven for city wildlife with a rose garden, fernery and <Jurassic Jungle> for kids.",
    "https://lh5.googleusercontent.com/p/AF1QipN-8-QjitIim4xiqvxVnne0__6mlbZPmfsF9lKJ=w408-h306-k-no"
  ),
  new Park(
    "Hyde Park",
    [-33.873392633353866, 151.2112653888942],
    "Large city park bordered by many significant buildings and containing statues of famous Australians.",
    "https://lh5.googleusercontent.com/p/AF1QipOn6wdX07C-RF5x05XHpbLepQki9aEJjucSYG-P=w408-h271-k-no"
  ),
  new Park(
    "Blackwattle Bay Park",
    [-33.871152697547416, 151.18382960580965],
    "Nice view. Perfect for sun-basking and picnics! There is a bbq grill available tho first-come, first serve. Also perfect for runners and joggers alike",
    "https://lh5.googleusercontent.com/p/AF1QipNoJtn7Mx84CdQHstH0YsBim5SSJcFu67et_XKA=w426-h240-k-no"
  ),
];

const restaurant = [
  new Restaurant(
    "Mad Mex Fresh Mexican",
    [-33.86769937050871, 151.20935029106434],
    "Mexican",
    true,
    "+61 292-415-287",
    "4.0 ★★★★☆",
    "https://lh5.googleusercontent.com/p/AF1QipOcTkJGoNU78mJen1vBgfBY-OWXYCNCM8RHx0SK=w156-h96-p-k-no"
  ),
  new Restaurant(
    "Guzman y Gomez",
    [-33.8677062, 151.2045792],
    "Mexican",
    true,
    "+61 292-474-422",
    "3.6 ★★★☆☆",
    "https://lh5.googleusercontent.com/p/AF1QipML0uZ6sZnvPSN52sQvri_VsXQUZuKajoV_xxk0=w156-h96-p-k-no"
  ),
  new Restaurant(
    "El Camino Cantina",
    [-33.85830561636156, 151.2078011257787],
    "Mexican",
    true,
    "+61 292 595 668",
    "3.6 ★★★☆☆",
    "https://lh5.googleusercontent.com/p/AF1QipPGRQhbYbNQJMI-GTkJSV59wTW5761Ea3w-4S4K=w156-h96-p-k-no"
  ),
  new Restaurant(
    "Casa Ristorante Italiano",
    [-33.867568035755944, 151.20151115417218],
    "Italian",
    "false",
    "+61 292 794 115",
    "3.7 ★★★☆☆",
    "https://lh5.googleusercontent.com/p/AF1QipMCXY-mI0i9hxcO1ohdgQQPqkatiotVTWSokD3X=w156-h96-p-k-no"
  ),
  new Restaurant(
    "Vanto Italian Restaurant",
    [-33.87153433236624, 151.20646662443713],
    "Italian",
    "false",
    "+61 292 679 959",
    "4.2 ★★★★☆",
    "https://lh5.googleusercontent.com/p/AF1QipPi4Ukio7ciTTkR-f1wG-Zwm6glJPHmT4BlPKGI=w156-h96-p-k-no"
  ),
  new Restaurant(
    "Alfredo",
    [-33.86167385301787, 151.21128816306725],
    "Italian",
    "false",
    "+61 292 512 929",
    "4.3 ★★★★☆",
    "https://lh5.googleusercontent.com/p/AF1QipPJez353EL-KTpU7UnIYYBHtqtdrvcYTJpPpCGF=w156-h96-p-k-no"
  ),
];

/*Function to transfer object to array that contains all information as strings
Other than 'name', 'location' and 'image' fixed special properties, it saves whatever informations are provided
so use can add more information later*/
function addText(obj) {
  const newObj = [];
  for (const [key, value] of Object.entries(obj)) {
    if (`${key}` === "name") {
      newObj.push(`${value}`);
      newObj.push(`<h2>${value}</h2>`);
    } else if (`${key}` === "location") {
      newObj.push(value);
    } else if (`${key}` === "image") {
      newObj.push(`<img src= ${value} style="width:80%" style = "height:50%">`);
    } else {
      newObj.push(`<p><b>${key}:</b> ${value}</p>`);
    }
  }
  return newObj;
}

/*
arrForName is an array that is transformed from an object.
First element is the name and second element is location coordiates. 
Except for array index[0] and index[2], 'arr' is the array that contains information that will can be provided later. 
Since information was saved in template literals, they are separated by commas. 
To remove this comma, replace comma to ''(empty).
*/
function addToMap(obj) {
  const arrForName = addText(obj);

  console.log("arr:", arrForName);

  const location = arrForName[2];
  const name = arrForName[0];
  const arr = (arrForName[1] + arrForName.splice(3)).replace(/,/g, "");

  const res = L.marker(location).bindPopup(arr).openPopup().addTo(myMap);
}

//Function that will implement each array inside of another array
function main(arr) {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < arr[j].length; i++) addToMap(arr[j][i]);
  }
}

//total for collecting all caterogies together
const total = [park, restaurant];
main(total);
