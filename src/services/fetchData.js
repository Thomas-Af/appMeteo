const url = 'https://api.meteo-concept.com/api/'
const REACT_APP_TOKEN_API = '95ac05afb0a6914eabe53c25723f147585bc526b0522ff7d808b0208cd61f664'



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