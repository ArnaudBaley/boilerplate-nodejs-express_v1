/**
 * @summary Users external API.
 */

const axios = require("axios").default;

async function getUser() {
  const result = await axios.get("https://randomuser.me/api/");
  const data = result.data.results[0];
  const user = {
    userName: data.login.username,
    firstName: data.name.first,
    lastName: data.name.last,
    age: data.dob.age,
  };
  return user;
}

module.exports = {
  getUser,
};
