import toast from 'react-hot-toast';

const getFromLocalStorage = (name) => {
    let storedItems = [];
    const getStoredItems = localStorage.getItem(name);

    if (getStoredItems) {
        storedItems = JSON.parse(getStoredItems);
        return storedItems;
    }

    return storedItems;
};

const saveToLocalStorage = (book, name) => {
    const storedBooks = getFromLocalStorage(name);

    const isExist = storedBooks.find(b => b.bookId == book.bookId);

    if (!isExist) {
        storedBooks.push(book);
        localStorage.setItem(name, JSON.stringify(storedBooks));
        return toast.success('Book added to your list!');
    } else {
        return toast.error('Book already exist!');
    }

};

const removeFromLocalStorage = (id, name) => {
    const storedBooks = getFromLocalStorage(name);
    const remainingBooks = storedBooks.filter(b => b.bookId != id);
    localStorage.setItem(name, JSON.stringify(remainingBooks));
};

export { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage };