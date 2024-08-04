import lodash from "lodash";
import axios from "axios";

const arr = [1, 2, 3,5];

console.log("SUM OF :: ", lodash.forEach(arr), " is ", lodash.sum(arr));


axios.get('https://api.github.com/users/carzy-zala')
  .then((response) => {
    console.log(response.data.login);
    console.log(response.data.name);
  });