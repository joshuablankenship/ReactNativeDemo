const axios = require('axios').default;

const getBreeds = async () => {
  let data: Array<any> = [];
  await axios
    .get('https://api.thecatapi.com/v1/breeds?limit=100')
    .then((response: {status: number; data: any}) => {
      if (response.status === 200) {
        console.log(response.data);
        data = response.data;
      }
    })
    .catch(function (error: any) {
      console.log(error);
    });
  return data;
};

const getImages = async (breed: string) => {
  let data: Array<any> = [];
  await axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${breed}&limit=10`,
    )
    .then((response: {status: number; data: any}) => {
      if (response.status === 200) {
        data = response.data;
      }
    })
    .catch(function (error: any) {
      console.log(error);
    });
  return data;
};
export {getImages};
export default getBreeds;
