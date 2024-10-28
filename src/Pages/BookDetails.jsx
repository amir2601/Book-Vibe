import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from './../Components/Loading';
import { saveToLocalStorage, getFromLocalStorage } from "../Utils/LocalStorage";
import toast from "react-hot-toast";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    // const books = useLoaderData();

    // useEffect(() => {
    //     const selectedBook = books.find(book => book.bookId == id);
    //     setBook(selectedBook);
    // }, [id]);

    useEffect(() => {
        fetch('../../public/books.json')
            .then(res => res.json())
            .then(data => {
                const selectedBook = data.find(book => book.bookId === parseInt(id));
                setBook(selectedBook);
            })
            .catch(error => console.error('Error fetching book data:', error));
    }, [id]);

    if (!book) {
        return <Loading></Loading>
    };

    const handleSetToLocalStorage = (bk, name) => {
        const storedReadsBooks = getFromLocalStorage('reads');
        
        if (name === 'wishlist') {
            const isExists = storedReadsBooks.find(book => book.bookId === bk.bookId);

            if (isExists) {
                return toast.error('Already read this book!');
            }
        }

        saveToLocalStorage(bk, name);
    };

    return (
        <div>
            <div className="grid md:grid-cols-2 overflow-hidden rounded-md shadow-sm md:p-6">
                <div className="flex justify-center bg-slate-100">
                    <img src={book.image} alt={book.bookName} className="dark:bg-gray-500 aspect-auto" />
                </div>
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 space-y-4">
                    <h3 className="text-3xl font-bold">{book.bookName}</h3>
                    <span className="text-xs uppercase dark:text-gray-600">By: {book.author}</span>

                    <hr />

                    <p>{book.category}</p>

                    <hr />

                    <p>
                        <span className="font-bold">Review:</span> {book.review}
                    </p>

                    <div className="flex items-center gap-3">
                        <p className="font-bold">Tags:</p>
                        <div className="flex gap-3">
                            {book.tags.map((tag, idx) => (
                                <span key={idx} className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600 border py-2 px-3 rounded-full bg-slate-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <hr />

                    <div className="flex gap-7">
                        <div className="space-y-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>

                        <div className="space-y-3 font-bold">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={() => handleSetToLocalStorage(book, 'reads')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-neutral hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Read</span>
                        </button>

                        <button onClick={() => handleSetToLocalStorage(book, 'wishlist')} className="relative rounded px-5 py-2.5 overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-neutral hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-neutral transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
