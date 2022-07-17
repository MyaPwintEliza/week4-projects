const searchInput = document.querySelector("#search-input");
const allProductsNameCollection = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value.toLocaleLowerCase();
  for (let i = 0; i < allProductsNameCollection.length; i++) {
    // console.log(allProductsNameCollection[i].textContent);
    const currentProducts =
      allProductsNameCollection[i].textContent.toLocaleLowerCase();
    if (currentProducts.includes(searchQuery)) {
      allProductsNameCollection[i].style.display = "block";
    } else {
      allProductsNameCollection[i].style.display = "none";
    }
  }
});
