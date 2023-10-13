import { createBrowserRouter} from 'react-router-dom';
import HomePage from '../features/Home/pages/HomePage';
import BillPage from '../features/Bill/pages/BillPage';
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/billing', element: <BillPage /> },
]);

export default router;