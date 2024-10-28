import PropTypes from "prop-types";
import { FaCalendarAlt, FaUser, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {

    return (
        <div>
            {/* Cards */}
            <div className="grid md:flex rounded-md shadow-sm border border-primary border-opacity-30 p-4 gap-8">
                <div className="flex justify-center bg-slate-100 h-64 md:w-1/3 rounded-md">
                    <img src={book.image} alt={book.bookName} className="dark:bg-gray-500" />
                </div>
                <div className="flex flex-col justify-center dark:bg-gray-50 space-y-4 w-full">
                    <h3 className="text-2xl font-semibold">{book.bookName}</h3>
                    <span className="text-xs uppercase dark:text-gray-600">By: {book.author}</span>

                    <div className="grid md:flex items-center gap-3">
                        <p className="font-semibold">Tags:</p>
                        <div className="flex gap-3">
                            {book.tags.map((tag, idx) => (
                                <span key={idx} className="flex items-center justify-center text-xs font-medium tracking-widest uppercase dark:text-violet-600 border py-1 md:py-2 px-3 rounded-full bg-slate-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:flex items-center gap-2 md:gap-5 font-thin text-neutral">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUser />
                            <p>Publisher: {book.publisher}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaFileAlt />
                            <p>Page: {book.totalPages}</p>
                        </div>
                    </div>

                    <hr />

                    <div className="grid md:flex gap-3 text-neutral text-sm">
                        <span className="bg-slate-100 py-1 px-4 rounded-full border">
                            Category: {book.category}
                        </span>
                        <span className="bg-slate-100 py-1 px-4 rounded-full border">
                            Rating: {book.rating}
                        </span>
                        <Link to={`/book-details/${book.bookId}`} className="bg-slate-100 py-1 px-4 rounded-full border hover:bg-neutral hover:text-neutral-content transition">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListedBookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default ListedBookCard;