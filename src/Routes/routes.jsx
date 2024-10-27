import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ListesBooks from "../Pages/ListesBooks";
import PagesToRead from "../Pages/PagesToRead";

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
            }
        ]
    },
]);