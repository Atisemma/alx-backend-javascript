/*eslint-disable*/
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    // You can replace this with actual API logic if needed
    setTimeout(() => {
      resolve("API response");
    }, 1000);
  });
}

export default getResponseFromAPI;
