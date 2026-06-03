const BASE_URL = "https://api-gate2.movieglu.com";

const headers = {
  "client":"STUD_436",
  "x-api-key": "ZinRgwtl0V6WQrvCjRiMZ6GrG4D42QdM6R71pZVN",
  "authorization": "Basic U1RVRF80MzY6VzJkZVJQbEd0OUc5",
  "territory": "IN",
  "api-version": "v201",
  "geolocation": "19.0760;72.8777", 
  "device-datetime": new Date().toISOString(),
};

export const fetchNowShowing = async () => {
  const res = await fetch(
    `${BASE_URL}/filmsNowShowing/?n=60`,
    {
      headers,
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
};