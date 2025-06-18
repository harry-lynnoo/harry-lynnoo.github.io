const pets = [
    {"name": "Buddy","type": "Dog","age": 3,"img": "img/dogs/dog01.jpg"},
    {"name": "Teddy","type": "Dog","age": 3,"img": "img/dogs/dog02.jpg"},
    {"name": "Moony", "type": "Dog", "age": 2, "img": "img/dogs/dog03.jpg" },
    {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg" },
    {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg" },
    {"name": "Sunny", "type": "Cat", "age": 2, "img": "img/cats/cat03.jpg" },
    {"name": "Jade", "type": "Bird", "age": 1, "img": "img/birds/bird01.jpg" },
    {"name": "Azure", "type": "Bird", "age": 1, "img": "img/birds/bird02.jpg" },
    {"name": "Freddy", "type": "Capybara", "age": 2, "img": "img/capybaras/capybara01.jpg" },
    {"name": "Georgie", "type": "Capybara", "age": 2, "img": "img/capybaras/capybara02.jpg" },
]
var ap = document.getElementById("all-pets")
// ap.innerHTML = "<h1>Hello World</h1>";

for (let i = 0; i < pets.length; i++) {
    var aPet = ap.appendChild(document.createElement("div"));
    aPet.className = "pet";
    aPet.innerHTML = `
    <img src="${pets[i].img}" alt="${pets[i].name}">
    <h3>${pets[i].name}</h3>
    <p>Type: ${pets[i].type}</p>
    <p>Age: ${pets[i].age} years</p>
    <button onclick="adoptPet()">Adopt Now</button>
`;
}