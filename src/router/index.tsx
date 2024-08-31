import {createBrowserRouter} from "react-router-dom";
import {ExpensesPage} from "@/pages/Expenses.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<ExpensesPage />),
    },
    {
        path: "about",
        element: <div>About</div>,
},
]);

export {router}