import toast from 'react-hot-toast';

const getToLocalStorage = (name) => {
    let storedItems = [];
    const getStoredItems = localStorage.getItem(name);

    if (getStoredItems) {
        storedItems = JSON.parse(getStoredItems);
        return storedItems;
    }

    return storedItems;
};

const saveToLocalStorage = (book, name) => {
    const storedBooks = getToLocalStorage(name);

    const isExist = storedBooks.find(b => b.bookId == book.bookId);

    if (!isExist) {
        storedBooks.push(book);
        localStorage.setItem(name, JSON.stringify(storedBooks));
        return toast.success('Book added to your list!');
    } else {
        return toast.error('Book already exist!');
    }

};

export { getToLocalStorage, saveToLocalStorage };