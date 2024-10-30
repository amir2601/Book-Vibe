import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/LocalStorage";
import Loading from "../Components/Loading";
import ListedBookCard from "../Components/ListedBookCard";
import Select from "react-dropdown-select";

const ListesBooks = () => {
    const [readsBooks, setReadsBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    const [index, setIndex] = useState(0);
    const [tab, setTab] = useState('read-books')

    useEffect(() => {
        const storedBooks = getFromLocalStorage('reads');
        setReadsBooks(storedBooks)
    }, []);

    useEffect(() => {
        const storedBooks = getFromLocalStorage('wishlist');
        setWishBooks(storedBooks);
    }, []);

    if (!readsBooks) {
        return <Loading></Loading>
    };

    const handleActiveTab = (index) => {
        setIndex(index);
        setTab(index === 0 ? 'read-books' : 'wishlist-books');
    }

    const handleSort = (e = [{ id: "rating" }]) => {
        const sortBy = e[0].id || "rating";
        const sortedBooks = [...readsBooks].sort((a, b) => {
            if (sortBy === 'year') return a.yearOfPublishing - b.yearOfPublishing;
            if (sortBy === 'pages') return a.totalPages - b.totalPages;
            return b.rating - a.rating; // Assuming higher rating is preferred
        });
        
        setReadsBooks(sortedBooks);
    };

    const options = [
        {
            id: "rating",
            name: 'Rating'
        },
        {
            id: "pages",
            name: 'Number of pages'
        },
        {
            id: "year",
            name: 'Publisher year'
        }
    ]

    return (
        <div>
            <div className="w-3/6 md:w-1/6 mx-auto my-4">
                <Select
                    placeholder="Sort by"
                    options={options}
                    labelField="name"
                    valueField="id"
                    onChange={handleSort}
                />
            </div>

            <div>
                <div className="md:w-1/4 my-4">
                    <div role="tablist" className="tabs tabs-lifted">
                        <a onClick={() => handleActiveTab(0)} role="tab" className={`${index === 0 ? 'tab tab-active' : 'tab'}`}>Read Books</a>
                        <a onClick={() => handleActiveTab(1)} role="tab" className={`${index === 1 ? 'tab tab-active' : 'tab'}`}>Wishlist Books</a>
                    </div>
                </div>

                {/* Listed Books Cards */}
                <div className="grid gap-4 my-4 md:my-10 px-2 md:px-0">
                    {
                        tab === 'read-books' ?
                            readsBooks.map(book => <ListedBookCard key={book.bookId} book={book}></ListedBookCard>) :

                            wishBooks.map(book => <ListedBookCard key={book.bookId} book={book}></ListedBookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListesBooks;