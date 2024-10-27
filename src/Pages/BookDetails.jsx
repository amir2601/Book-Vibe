import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const BookDetails = () => {
    const [book, setBook] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const books = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const singleBook = books.find(b => b.id == id);
        setBook(singleBook);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(book)

    return (
        <div>
            <div className="grid grid-cols-2 overflow-hidden rounded-md shadow-sm p-6">
                <div className="flex justify-center bg-slate-100">
                    <img src={book.img} alt="" className="dark:bg-gray-500 aspect-auto" />
                </div>
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 space-y-4">
                    <h3 className="text-3xl font-bold">{book.name}</h3>
                    <span className="text-xs uppercase dark:text-gray-600">By: {book.author}</span>

                    <hr />

                    <p>
                        {book.category}
                    </p>

                    <hr />

                    <p>
                        <span className="font-bold">Review:</span> {book.review}
                    </p>

                    <div className="flex items-center gap-3">
                        <p className="font-bold">Tags:</p>
                        <div className="flex gap-3">
                            {
                                book.tags.map((tag, idx) => (
                                    <span key={idx} className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600 border py-2 px-3 rounded-full bg-slate-100">{tag}</span>
                                ))
                            }
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
                </div>
            </div>
        </div>
    );
};

export default BookDetails;