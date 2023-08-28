import Layout from "../pages/layout";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    }
])

export default router;