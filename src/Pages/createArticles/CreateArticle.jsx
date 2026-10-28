import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    message: "",
    imageUrl: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleCreateNewArticle = async () => {
    if (
      !article.title.trim() ||
      !article.author.trim() ||
      !article.message.trim()
    ) {
      setStatus("Please fill in the title, author, and content.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus("Creating article...");

      const response = await axios.post(
        "https://react-article-api.onrender.com/articles",
        {
          title: article.title.trim(),
          date: article.date,
          readingTime: article.readingTime,
          author: article.author.trim(),
          imageUrl: article.imageUrl.trim(),
          content: article.message.trim(),
        },
      );

      if (response.status === 200 || response.status === 201) {
        setStatus("Article created successfully!");

        setArticle({
          title: "",
          date: "",
          readingTime: "",
          author: "",
          message: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      console.error("Article creation failed:", error);

      if (error.response) {
        setStatus(
          `Failed to create article. Server error: ${error.response.status}`,
        );
      } else {
        setStatus("Could not connect to the server. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
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

          <Textarea label="Text" handleChange={handleChangeArticleMessage} />

          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle} disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </div>

          {status && (
            <p role="status" aria-live="polite">
              {status}
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CreateArticle;
