import styled from "./article.module.css"
// import images from "./../../assets/images/1.jpg"

function Article(props) {

  console.log(props.article);

  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />

      <h3>{props.article.title}</h3>

    <p>{props.article.readingTime}-minute reading</p>

    </div>
  );
}

export default Article;
