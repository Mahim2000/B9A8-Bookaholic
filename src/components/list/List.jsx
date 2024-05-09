import { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredRead } from "../../components/Storage/SaveBook";
import { storedGetRead } from "../../components/Storage/WishBook";

const List = () => {
    const books = useLoaderData();

    const [booksListed, setBooksListed] = useState([]);
    const [wishBooksListed, setWishBooksListed] = useState([]);
    
    useEffect(() => {
        const storedBookIds = getStoredRead();
        if(books.length > 0) {
            const listedBooks = books.filter(book => storedBookIds.includes(book.id));
            setBooksListed(listedBooks);
        }
    } , [books]);
    
    useEffect(() => {
        const wishStoredBookIds = storedGetRead();
        if(books.length > 0) {
            const booksListed = books.filter(book => wishStoredBookIds.includes(book.id));
            setWishBooksListed(booksListed);
        }
    } , []);

    const [readBook, setReadBook] = useState([]);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const storedReadBooks = storedGetRead();
        setReadBook(storedReadBooks);
        setShowData(storedReadBooks);
    }, []);

    const handleFilter = (filter) => {
        if(filter === 'rating') {
            const shortByRating = readBook.reverse((a, b) => b.rating - a.rating);
            setShowData([...shortByRating]);
        }
        else if(filter === 'totalPages') {
            const shortByPageNumber = readBook.reverse((a, b) => b.totalPages - a.totalPages);
            setShowData([...shortByPageNumber]);
        }
        else if (filter === 'publisher') {
            const shortByPublisher = readBook.reverse((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setShowData([...shortByPublisher]);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-[1120px]">
                <div className="text-center font-work font-bold text-28 rounded-lg bg-opacity-5 bg-black p-4 mb-4">
                    <h1 className="text-center font-work font-bold text-28 leading-normal">Books</h1>
                </div>
                <div className="text-center mb-24 mt-8">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 inline-flex px-24 py-8 justify-center items-center space-x-16 rounded-8 bg-green-500 text-center font-work font-semibold text-white text-18">Sort By <MdOutlineArrowDropDown /></div> 
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-center font-work font-normal text-opacity-80 text-sm leading-28 rounded-8 bg-opacity-5 bg-black">
                            <li onClick={() => handleFilter('rating')}><Link>Rating</Link></li>
                            <li onClick={() => handleFilter('totalPages')}><Link>Number of pages</Link></li>
                            <li onClick={() => handleFilter('publisher')}><Link>Publisher year</Link></li>
                        </ul>
                    </div>
                </div>
                {booksListed.map(book => (
                    <div key={book.id} className="flex justify-center w-full">
                        <div className="card card-side bg-base-100 shadow-xl lg:w-full md:w-full md:h-auto rounded-xl">
                            <figure className="p-7 w-64 m-5 bg-slate-100">
                                <img src={book.image} alt={book.name} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.name}</h2>
                                <div className="card-author">
                                    <p>By: {book.author}</p>
                                    <div className="card-actions justify-start gap-4 mt-2 flex flex-wrap items-center">
                                        <div>
                                            <p className="font-bold">Tag:</p>
                                        </div>
                                        {book.tags.map(tag => (
                                            <div key={tag} className="badge badge-outline bg-green-100 text-green-500">{tag}</div>
                                        ))}
                                        <div className="flex gap-2">
                                            <img src="https://www.svgrepo.com/show/450022/calendar.svg" width="2.5%" alt="" />
                                            <p className="text-slate-500">Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-start gap-3 mt-2">
                                        <div className="flex gap-2">
                                            <img src="https://www.svgrepo.com/show/509193/people.svg" width="2.5%" alt="" />
                                            <p className="text-slate-500">Publisher: {book.publisher}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="https://www.svgrepo.com/show/325462/page.svg" width="2.5%" alt="" />
                                            <p className="text-slate-500">Page: {book.totalPages}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-actions justify-start gap-4 mt-2 flex flex-wrap items-center">
                                    <div className="p-3 bg-blue-200 border-blue-200 rounded-full text-blue-700 font-bold">Category: {book.category}</div>
                                    <div className="p-3 bg-orange-200 border-orange-200 rounded-full text-orange-700 font-bold">Rating: {book.rating}</div>
                                    <Link to={`/`}>
                                        <button className="btn bg-green-500 hover:bg-green-600 border-green-500 rounded-full text-white">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
