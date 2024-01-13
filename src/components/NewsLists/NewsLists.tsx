import "./style.css";

interface Article {
  title: string;
  description: string;
  urlToImage?: string;
  content?: string; // Adding content to the Article interface
  url: string;
}

interface NewsListProps {
  newsData: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div className="news-list-container">
      {newsData && newsData.length > 0 ? (
        newsData.map((article, index) => (
          <div key={index} className="article-container">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="Article Thumbnail"
                className="article-thumbnail"
              />
            )}
            <h2>{article.title}</h2>

            {article.content && <p>{article.content}</p>}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>No articles found</p>
      )}
    </div>
  );
};

export default NewsList;
