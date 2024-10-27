import toast from 'react-hot-toast';

const getToLocalStorage = () => {
    let storedItems = [];
    const getStoredItems = localStorage.getItem('books');

    if (getStoredItems) {
        storedItems = JSON.parse(getStoredItems);
        return storedItems;
    }

    return storedItems;
};

const saveToLocalStorage = (book) => {
    const storedBooks = getToLocalStorage();

    const isExist = storedBooks.find(b => b.bookId == book.bookId);

    if (!isExist) {
        storedBooks.push(book);
        localStorage.setItem('books', JSON.stringify(storedBooks));
        return toast.success('Book added to your list!');
    } else {
        return toast.error('Book already exist!');
    }

};

export { getToLocalStorage, saveToLocalStorage };