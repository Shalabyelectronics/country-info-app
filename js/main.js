import { getCountryInfo } from "./services.js";

const resultBox = document.querySelector("#result");
const searchInput = document.querySelector("#country-input");
const searchBTN = document.querySelector(".search-btn");
let clear;
searchBTN.addEventListener("click", (e) => {
  if (searchInput.value.length >= 3) {
    const data = getCountryInfo(searchInput.value.toLowerCase());
    data
      .then((res) => {
        const [country] = res;

        resultBox.innerHTML = `<div class="inner"> 
        <img src="${country.flags.svg}" width="250" hight="200" alt="country flag" />
        <ul>
        <li>Country name: ${country.name.common}</li>
        <li>Capital name: ${country.capital[0]}</li>
        <li>Population: ${country.population}</li>
        <li>Region: ${country.region}</li>
   
        </ul>
        
        </div>`;
      })
      .catch((err) => {
        resultBox.innerHTML = `<h3>We can't find ${searchInput.value} Data check the country name or try again.</h3>`;
        clear = setInterval(() => {
          resultBox.innerHTML = "<h3>Here you can see the result.</h3>";
          searchInput.value = "";
        }, 3000);
      });
  } else {
    alert("No country name less tha three words.");
  }
});

searchInput.addEventListener("input", (e) => clearInterval(clear));
