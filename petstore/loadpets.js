const pets = [
  { name: "Buddy", type: "Dog", age: 3, img: "img/dogs/dog01.jpg" },
  { name: "Sunshine", type: "Dog", age: 3, img: "img/dogs/dog02.jpg" },
  { name: "Whiskers", type: "Cat", age: 2, img: "img/cats/cat01.jpg" },
  { name: "Mittens", type: "Cat", age: 2, img: "img/cats/cat02.jpg" },
  { name: "Jade", type: "Bird", age: 1, img: "img/birds/bird01.jpg" },
  { name: "Ruby", type: "Bird", age: 1, img: "img/birds/bird02.jpg" },
  { name: "Goldie", type: "Capybara", age: 4, img: "img/capybaras/capybara01.jpg" },
  { name: "Bubbles", type: "Capybara", age: 4, img: "img/capybaras/capybara02.jpg" },
];

function adoptPet() {
  alert(
    "Thank you for your interest in adopting! Our team will contact you soon."
  );
}

function loadPets() {
  console.log("Loading pets...");
  const petList = document.getElementById("pet-list");

  pets.forEach((pet) => {
    const petItem = document.createElement("div");
    petItem.className = "pet";
    petItem.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}" />
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
      `;
    petList.appendChild(petItem);
  });

  console.log("Pets loaded successfully.");
}

document.addEventListener("DOMContentLoaded", loadPets);
