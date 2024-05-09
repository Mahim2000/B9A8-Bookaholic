import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const SmallBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/Books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen mt-80 mb-80">
      <div className="flex flex-wrap justify-between gap-2 max-w-[1100px] mx-10">
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`} className="no-underline">
            <div className="card w-[370px] h-[450px] bg-base-100 shadow-xl border-2">
              <figure className="px-7 pt-10 bg-slate-100">
                <img src={book.image} alt={book.name} className="rounded-xl pb-6" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-start gap-4">
                  {book.tags.map(tag => (
                    <div key={tag} className="badge badge-outline bg-green-100 text-green-500">
                      {tag}
                    </div>
                  ))}
                </div>
                <h2 className="card-title">{book.name}</h2>
                <p>By: {book.author}</p>
                <hr />
                <div className="flex justify-between">
                  <p>{book.category}</p>
                  <div className="flex justify-end">
                    <p className="flex justify-end mr-5">{book.rating}</p>
                    <img
                      src="https://www.svgrepo.com/show/526669/star.svg"
                      width="7%"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallBooks;
