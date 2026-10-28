import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/aboutMe/AboutMe"
import ArticlePage from "./Pages/articlePage/ArticlePage";
import CreateArticle from "./Pages/createArticles/CreateArticle";
import NotFound from "./Pages/notFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="create-article" element={<CreateArticle />} />
      </Routes>
    </>
  );
}

export default App;
