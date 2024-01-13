import { useState, useEffect } from "react";
import "./news-module.css";
import NewsTitle from "../../components/NewsTitle/newsTitle";
import NewsFilter from "../../components/newsFilter/newsFilter";
import { fetchNewsByCategory } from "../../services/api";
import PublishedDate from "../../components/publishedDate/publishedDate";
import NewsDescriptions from "../../components/NewsDescriptions/NewsDescriptions";

const News: React.FC = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchNewsByCategory(selectedCategory);
      setNews(result);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFilterButtonClick = () => {
    setLoading(true); // Show loading state while fetching new data
    // The useEffect will be triggered when the selected category changes, fetching the news
  };

  return (
    <section className="container">
      <div className="child-container">
        <h1>Latest News</h1>
        <NewsFilter
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          onFilterButtonClick={handleFilterButtonClick}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="news-grid">
            {news.map(
              ({ title, description, urlToImage, publishedAt, url }, index) => (
                <div key={url || index} className="news-item">
                  <NewsTitle title={title} limit={39} />
                  <PublishedDate publishedAt={publishedAt} />
                  {urlToImage && (
                    <img src={urlToImage} alt={title} className="news-image" />
                  )}
                  <NewsDescriptions desc={description} limit={100} />
                  <a
                    className="read-more"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
