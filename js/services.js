export const getCountryInfo = async (countryName) => {
  try {
    const response =
      await fetch(`https://restcountries.com/v3.1/name/${countryName}
`);
    if (!response.ok) {
      throw new Error(
        `Sorry there is a server error, please try again later.\nFor more details : ${response.status}`,
      );
    }
    const countryData = await response.json();
    return countryData;
  } catch (err) {
    throw err;
  }
};
