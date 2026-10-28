import styled from "./article.module.css"


function Article(props) {

  console.log(props.article);

  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} alt={props.article.title} />

      <h3>{props.article.title}</h3>

    <p>{props.article.readingTime}-minute reading</p>

    </div>
  );
}

export default Article;
