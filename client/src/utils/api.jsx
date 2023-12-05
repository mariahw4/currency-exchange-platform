// "latest" endpoint - request the most recent exchange rate data
require("dotenv").config();

export async function getLatestRate() {
  try {
    const accessKey = import.meta.env.ACCESS_KEY
    // Replace 'https://api.example.com/data' with the actual URL of the API
    const response = await fetch(
      `http://data.fixer.io/api/latest?access_key=${accessKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming the response is in JSON format, use json() method to parse it
    const data = await response.json();

    // Process the data as needed
    console.log("Data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Propagate the error to the calling code if needed
  }
}
