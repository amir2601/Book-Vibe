import { useEffect, useState } from "react";
import { getToLocalStorage } from "../Utils/LocalStorage";
import Loading from "../Components/Loading";
import ListedBookCard from "../Components/ListedBookCard";
import WishlistBooksCard from "../Components/WishlistBooksCard";

const ListesBooks = () => {
    const [readsBooks, setReadsBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    const [index, setIndex] = useState(0);
    const [tab, setTab] = useState('read-books')

    useEffect(() => {
        const storedBooks = getToLocalStorage('reads');
        setReadsBooks(storedBooks);
    }, []);

    useEffect(() => {
        const storedBooks = getToLocalStorage('wishlist');
        setWishBooks(storedBooks);
    }, []);

    if (!readsBooks) {
        return <Loading></Loading>
    };

    const handleActiveTab = (index) => {
        setIndex(index);
        setTab(index === 0 ? 'read-books' : 'wishlist-books');
    }

    return (
        <div>
            <div className="w-1/4 my-4">
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
    );
};

export default ListesBooks;