import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div className="sm:pt-10">
            <h1 className="text-5xl font-semibold text-center mb-10">Books</h1>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
                {
                    books.map(book => <BookCard
                        key={book.bookId}
                        book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;