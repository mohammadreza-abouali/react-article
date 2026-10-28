import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    message: "",
    imageUrl: "",
  });

  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };



  const handleCreateNewArticle = () => {
    axios.post("https://react-article-api.onrender.com/articles", {
      id: 9,
      imageUrl: article.imageUrl,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      author: article.author,
      content: article.message,
    });
  };

  return (
    <>
      <Navbar title="Mohammadreza Blog" />

      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>Article Creation</h1>

          <Input
            label="Title"
            name="title"
            handleChange={handleChangeArticle}
          />
          <Input label="Date" name="date" handleChange={handleChangeArticle} />
          <Input
            label="Reading Time"
            name="readingTime"
            handleChange={handleChangeArticle}
          />
          <Input
            label="Author"
            name="author"
            handleChange={handleChangeArticle}
          />
          <Input
            label="Image Address"
            name="imageUrl"
            handleChange={handleChangeArticle}
          />
          <Textarea label="text" handleChange={handleChangeArticleMessage} />

          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle}>Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
