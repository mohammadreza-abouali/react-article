import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {
  const [article, setArticle] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="Mohammadreza Blog" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <p>please wait a few moments...</p>
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <p>Date: {article.date}</p>
                <p>Author: {article.author}</p>
                <p>Reading Time: {article.readingTime}</p>
              </div>

              <img src={article.imageUrl} alt="" />

              <p>{article.content}</p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ArticlePage;
