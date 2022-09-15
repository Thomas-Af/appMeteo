const url = 'https://api.meteo-concept.com/api/location/cities'
const REACT_APP_TOKEN_API = '95ac05afb0a6914eabe53c25723f147585bc526b0522ff7d808b0208cd61f664'


const searchCities = async (endpoint) => {
  try {
    const response = await fetch(url + `?token=${process.env.REACT_APP_TOKEN_API}&search=` + endpoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default searchCities;