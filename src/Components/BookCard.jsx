import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, tags, category, rating } = book;

    return (
        <Link to={`book-details/${bookId}`}>
            <div className="p-6 rounded-xl drop-shadow-lg dark:bg-gray-50 dark:text-gray-900 cursor-pointer">
                <div className="flex justify-center bg-slate-100 p-4">
                    <img src={image} alt="" className="rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="flex gap-4 mt-6 mb-2">
                    {
                        tags.map((tag, idx) => (
                            <span key={idx} className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600 border py-2 px-3 rounded-full">{tag}</span>
                        ))
                    }
                </div>
                <h2 className="text-2xl font-semibold tracking-wide my-4">{bookName}</h2>

                <p className="dark:text-gray-800 pb-3 border-b border-dashed">By: {author}</p>

                <div className="flex justify-between mt-3">
                    <p>{category}</p>
                    <div className="flex items-center gap-2">
                        <p>{rating}</p>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BookCard;