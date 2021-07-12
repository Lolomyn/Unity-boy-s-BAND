export function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  
  export function sunBuilder (d) {
    var res = [d.getHours(), d.getMinutes(), d.getSeconds()].map(function (x) {
      return x < 10 ? "0" + x : x
    }).join(":")
    return res;
  }
  