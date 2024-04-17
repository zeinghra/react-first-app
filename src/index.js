import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

const books = [
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    imgSource: './assets/images/book-2.webp',
    id: 1,
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn HaverBe ke',
    imgSource: './assets/images/book-4.webp',
    id: 2,
  },
];

const BookList = () => {
  return (
    <>
      <EventExamples />
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

const EventExamples = () => {
  const handleClickEvent = () => {
    console.log('handled click event');
  };

  const handleFormInput = () => {
    console.log('handled input change');
  };
  return (
    <section>
      <form>
        <h2>Form example</h2>
        <input type='text' name='examples' onChange={handleFormInput} />
        <button onClick={handleClickEvent}>Clickme</button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { title, author, imgSource, children } = props;
  return (
    <article className='book'>
      <img src={imgSource} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
