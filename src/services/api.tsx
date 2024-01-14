// NewsAPI.js
import axios from "axios";

//new api
const apiKey = "0fa5bf9418294f959d81aa25dc23b0c3";

const fetchNewsByCategory = async (selectedCategory: string) => {
  try {
    let apiUrls = [];

    if (selectedCategory === "") {
      // Fetch news from all categories or provide a default category
      apiUrls = [
        `https://newsapi.org/v2/top-headlines?country=us&category=apple&apiKey=${apiKey}`,
        `https://newsapi.org/v2/top-headlines?country=us&category=tesla&apiKey=${apiKey}`,
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`,
      ];
    } else {
      switch (selectedCategory) {
        case "apple":
          apiUrls.push(
            `https://newsapi.org/v2/everything?q=apple&from=2024-01-11&to=2024-01-11&sortBy=popularity&apiKey=${apiKey}`
          );
          break;
        case "tesla":
          apiUrls.push(
            `https://newsapi.org/v2/everything?q=tesla&from=2023-12-13&sortBy=publishedAt&apiKey=${apiKey}`
          );
          break;
        case "business":
          apiUrls.push(
            `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
          );
          break;
        case "tech":
          apiUrls.push(
            `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
          );
          break;
        default:
          console.error("Invalid category");
          return [];
      }
    }

    const responses = await Promise.all(apiUrls.map((url) => axios.get(url)));

    // Combine the results from all requests into a single array
    return responses.reduce(
      (accumulator, response) => accumulator.concat(response.data.articles),
      []
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export { fetchNewsByCategory };
