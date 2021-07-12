import { getResults } from "./getResults";

var objSel = document.f1.town;

  export function initFavs()
  {
    // Handle Favorites
    var fav = document.getElementsByClassName('city')[0].textContent;
    //console.log(fav);
    objSel.options[objSel.options.length] = new Option(fav, fav);
  }

  export function f() {
      getResults(document.getElementById('s1').value);
  }
  