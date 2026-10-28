import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://react-article-api.onrender.com/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="Mohammadreza Blog" />

      <div className="container">
        <h2>New Articles</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
