import * as ChangeTheme from "../modules/darktheme";
import * as LiveSearch from "../modules/llvesearch";
import { getResults, getResultsCoord } from "../modules/getResults";
import { initFavs, f } from "../modules/Fav";

export const api = {
    key: "a015feb1de4b314da2eb41987b99b84e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    getResultsCoord(searchbox.value);
    }
  }