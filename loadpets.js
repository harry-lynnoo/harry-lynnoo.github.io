const pets = [
  { name: "Buddy", type: "Dog", age: 3, img: "img/dogs/dog01.jpg" },
  { name: "Teddy", type: "Dog", age: 3, img: "img/dogs/dog02.jpg" },
  { name: "Moony", type: "Dog", age: 2, img: "img/dogs/dog03.jpg" },
  { name: "Whiskers", type: "Cat", age: 2, img: "img/cats/cat01.jpg" },
  { name: "Mittens", type: "Cat", age: 2, img: "img/cats/cat02.jpg" },
  { name: "Sunny", type: "Cat", age: 2, img: "img/cats/cat03.jpg" },
  { name: "Jade", type: "Bird", age: 1, img: "img/birds/bird01.jpg" },
  { name: "Azure", type: "Bird", age: 1, img: "img/birds/bird02.jpg" },
  { name: "Freddy", type: "Capybara", age: 2, img: "img/capybaras/capybara01.jpg" },
  { name: "Georgie", type: "Capybara", age: 2, img: "img/capybaras/capybara02.jpg" }
];

function renderPets(filterTypes) {
  const ap = document.getElementById("all-pets");
  ap.innerHTML = ""; // Clear existing

  pets.forEach(pet => {
    if (!filterTypes.includes(pet.type)) return;

    const aPet = document.createElement("div");
    aPet.className = "pet";
    aPet.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `;
    ap.appendChild(aPet);
  });
}

function getSelectedFilters() {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  return Array.from(checkboxes)
              .filter(cb => cb.checked)
              .map(cb => cb.value);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPets(getSelectedFilters());

  const checkboxes = document.querySelectorAll(".filter-checkbox");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      renderPets(getSelectedFilters());
    });
  });
});

function adoptPet() {
  alert("Thank you for adopting!");
}
