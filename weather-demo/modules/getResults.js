import {displayResults, displayResultsCoord} from "./displayResults";
import { api } from "../public";
export function getResultsCoord(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResultsCoord);
  }
  
  export function getResults (query) {
    fetch(`${api.base}forecast?q=${query}&appid=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }