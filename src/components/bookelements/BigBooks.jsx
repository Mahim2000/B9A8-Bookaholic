import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

import { saveBookDetails } from "../../components/Storage/SaveBook";
import { wishBookDetails } from "../../components/Storage/WishBook";


const BigBooks = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.id === bookIdInt);

    const [booksListed, setBooksListed] = useState(JSON.parse(localStorage.getItem("booksListed")) || []);
    const [wishBooksListed, setWishBooksListed] = useState(JSON.parse(localStorage.getItem("wishBooksListed")) || []);

    const handleAddToRead = () => {
        if (!book) {
            Swal.fire({
                icon: 'error',
                title: 'Book not found',
                text: 'The book you are trying to add is not found.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
            return;
        }
        if (wishBooksListed.includes(bookIdInt)) {
            Swal.fire({
                icon: 'error',
                title: 'Already in Wishlist',
                text: 'This book is already in the Wishlist. You cannot add it to Read.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        } else if (booksListed.includes(bookIdInt)) {
            Swal.fire({
                icon: 'warning',
                title: 'Already Added to Read',
                text: 'This book is already added to Read.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        } else {
            setBooksListed([...booksListed, bookIdInt]);
            saveBookDetails(bookIdInt);
            Swal.fire({
                icon: 'success',
                title: 'Added to Read',
                text: 'Book added to Read successfully.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        }
    };

    const handleAddToWishlist = () => {
        if (!book) {
            Swal.fire({
                icon: 'error',
                title: 'Book not found',
                text: 'The book you are trying to add is not found.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
            return;
        }
        if (booksListed.includes(bookIdInt)) {
            Swal.fire({
                icon: 'error',
                title: 'Already in Read',
                text: 'This book is already in Read. You cannot add it to Wishlist.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        } else if (wishBooksListed.includes(bookIdInt)) {
            Swal.fire({
                icon: 'warning',
                title: 'Already Added to Wishlist',
                text: 'This book is already added to Wishlist.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        } else {
            setWishBooksListed([...wishBooksListed, bookIdInt]);
            wishBookDetails(bookIdInt);
            Swal.fire({
                icon: 'success',
                title: 'Added to Wishlist',
                text: 'Book added to Wishlist successfully.',
                timer: 10000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="flex w-[80%] h-[80%] gap-12">
                <div className="flex justify-center items-center bg-slate-100 w-[600px] rounded-lg">
                    <img src={book ? book.image : ""} width="300px" alt="" />
                </div>
                <div className="card-body w-[50%] h-[50%]">
                    <h2 className="card-title text-5xl">{book ? book.name : "Book not found"}</h2>
                    <div className="card-author">
                        {book && (
                            <>
                                <p className="text-xl my-4">By: {book.author}</p>
                                <hr />
                                <p className="my-4 text-lg">{book.category}</p>
                                <hr />
                                <p className="my-4 mb-6 text-lg text-slate-600">
                                    <b className="text-black">Review: </b>
                                    {book.review}
                                </p>
                                <div className="card-actions justify-start gap-4 my-4 mb-6 flex flex-wrap items-center">
                                    <div>
                                        <p className="font-bold">Tags:</p>
                                    </div>
                                    {book.tags.map(tag => (
                                        <div key={tag} className="badge badge-outline bg-green-100 text-green-500 p-3">
                                            #{tag}
                                        </div>
                                    ))}
                                </div>
                                <hr />
                                <div className="card-actions justify-start gap-4 mt-2">
                                    <table className="w-full">
                                        <tr>
                                            <td className="font-bold w-2/6">Number of Pages:</td>
                                            <td className="w-5/6">{book.totalPages}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold w-2/6">Publisher:</td>
                                            <td className="w-5/6">{book.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold w-2/6">Year of Publishing:</td>
                                            <td className="w-5/6">{book.yearOfPublishing}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold w-2/6">Rating:</td>
                                            <td className="w-5/6">{book.rating}</td>
                                        </tr>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                    <div className="card-actions justify-start gap-4 mt-2 flex flex-wrap items-center">
                        <button className="btn w-[120px] bg-transparent border-gray-500 hover:bg-black hover:text-white hover:border-black rounded-lg text-black border" onClick={handleAddToRead}>
                            Read
                        </button>
                        <button className="btn w-[120px] bg-cyan-500 hover:bg-cyan-600 border-cyan-500 rounded-lg text-white" onClick={handleAddToWishlist}>
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigBooks;
