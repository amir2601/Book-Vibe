import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ListesBooks from "../Pages/ListesBooks";
import PagesToRead from "../Pages/PagesToRead";
import BookDetails from "../Pages/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "listed-books",
                element: <ListesBooks></ListesBooks>,
            },
            {
                path: "pages-to-read",
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: 'book-details/:id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('../../public/books.json')
            }
        ]
    },
]);