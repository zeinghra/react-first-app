const Book = (props) => {
  const { title, author, imgSource, children, number } = props;

  return (
    <article className='book'>
      <img src={imgSource} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      <p className='number'>#{number + 1}</p>
      {children}
    </article>
  );
};

export default Book;
