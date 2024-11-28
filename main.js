const searchBtn = document.querySelector("#search-button");

const allItem = document.querySelector("#all-items");
const topWear = document.querySelector("#top-wears");
const bottomWear = document.querySelector("#bottom-wears");
const jackets = document.querySelector("#jackets");
const watches = document.querySelector("#watches");

let bodyContainer = document.querySelector(".body-container");

const data = [
  {
    productName: "Regular White T-shirt",
    category: "Topwear",
    price: "30",
    image: "img/white-tshirt.jpg",
  },
  {
    productName: "Beige Short Skirt",
    category: "Bottomwear",
    price: "49",
    image: "img/short-skirt.jpg",
  },
  //smart-watches
  {
    productName: "Sporty Smart Watch",
    category: "Watches",
    price: "99",
    image: "img/sporty-smartwatch.jpg",
  },
  {
    productName: "Men's Casual Watch",
    category: "Watches",
    price: "95",
    image: "img/mens-casual-smartwatch.jpg",
  },
  {
    productName: "Ladies Outdoor Watch",
    category: "Watches",
    price: "80",
    image: "img/lady-colorful-smartwatch.jpeg",
  },
  {
    productName: "Advanced Smart Watch",
    category: "Watches",
    price: "99",
    image: "img/advanced-smartwatch.jpg",
  },
  // ladies top wear
  {
    productName: "Basic Knitted Top",
    category: "Topwear",
    price: "25",
    image: "img/knitted-top.jpg",
  },
  {
    productName: "Black Leather Jacket",
    category: "Jacket",
    price: "130",
    image: "img/black-leather-jacket.jpg",
  },
  {
    productName: "Stylish Pink Trousers",
    category: "Bottomwear",
    price: "89",
    image: "img/pink-trousers.jpg",
  },
  {
    productName: "Brown Men's Jacket",
    category: "Jacket",
    price: "109",
    image: "img/brown-jacket.jpg",
  },
  {
    productName: "Comfy Gray Pants",
    category: "Bottomwear",
    price: "50",
    image: "img/comfy-gray-pants.jpg",
  },
];

data.map((items) => {
  let card = document.createElement("div");
  card.classList.add("card-item");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  let image = document.createElement("img");
  image.setAttribute("src", items.image);

  let proDetails = document.createElement("div");
  proDetails.classList.add("product-details");

  let proName = document.createElement("h5");
  proName.classList.add("product-name");
  proName.innerText = items.productName;

  let proPrice = document.createElement("h5");
  proPrice.classList.add("product-price");
  proPrice.innerText = "$ " + items.price;

  //   let stars = document.createElement("i");
  //   stars.classList.add("fa-solid fa-star");

  proDetails.appendChild(proName);
  proDetails.appendChild(proPrice);
  //   proDetails.appendChild(stars);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  card.appendChild(proDetails);
  bodyContainer.appendChild(card);

  //click the search box to filter items based on the search term

  //click the buttons to filter by category

  allItem.addEventListener("click", () => {
    card.classList.remove("show");
    card.classList.add("show");
  });
  topWear.addEventListener("click", () => {
    card.classList.remove("show");
    data.filter(() => {
      if (items.category == "Topwear") {
        card.classList.add("show");
      }
    });
  });
  bottomWear.addEventListener("click", () => {
    card.classList.remove("show");
    data.filter(() => {
      if (items.category == "Bottomwear") {
        card.classList.add("show");
      }
    });
  });
  jackets.addEventListener("click", () => {
    card.classList.remove("show");
    data.filter(() => {
      if (items.category == "Jacket") {
        card.classList.add("show");
      }
    });
  });
  watches.addEventListener("click", () => {
    card.classList.remove("show");
    data.filter(() => {
      if (items.category == "Watches") {
        card.classList.add("show");
      }
    });
  });
  searchBtn.addEventListener("click", () => {
    let cards = document.querySelectorAll(".card-item");
    let element = document.querySelectorAll(".product-name");
    let myInput = document.querySelector("#search-box");

    element.forEach((item, index) => {
      if (item.innerText.toUpperCase().includes(myInput.value.toUpperCase())) {
        cards[index].classList.add("show");
      } else {
        cards[index].classList.remove("show");
      }
    });
    // myInput.value = "";
  });
});
