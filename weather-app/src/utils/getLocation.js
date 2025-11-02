export async function getLocation(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        status: "error",
        code: response.status,
        message: `HTTP error: ${response.status}`,
      };
    }

    const data = await response.json();
    if (!data.results) {
      return {
        status: "error",
        code: 404,
        message: "No valid location found",
      };
    }

    const filteredResult = data.results.filter((loc) => loc.population > 0)[0];

    if (!filteredResult) {
      return {
        status: "error",
        code: 204,
        message: "NO valid location found",
      };
    }

    console.log(filteredResult);
    const searchLocation = {
      city: filteredResult.name,
      lat: filteredResult.latitude,
      long: filteredResult.longitude,
      country: filteredResult.country,
      timezone: filteredResult.timezone,
    };
    console.log(searchLocation);
    return { status: "success", data: searchLocation };
  } catch (error) {
    console.error("An error occured:", error.message);
    return {
      status: "error",
      code: 500,
      message: `Location fetching failed: ${error.message}`,
    };
  }
}
