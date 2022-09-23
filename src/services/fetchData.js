const url = 'https://api.meteo-concept.com/api/'
const REACT_APP_TOKEN_API = '95ac05afb0a6914eabe53c25723f147585bc526b0522ff7d808b0208cd61f664'
const REACT_APP_TOKEN_API_2 = 'f13320afe3014096ad611827faba2c277ef497f76e0389288b7d9d93e22e376d'



const fetchData = async (endpoint, cp) => {
  try {
    const response = await fetch(url + endpoint + `?token=${process.env.REACT_APP_TOKEN_API}&insee=`+ cp);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;