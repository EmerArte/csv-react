import { createBrowserRouter} from 'react-router-dom';
import HomePage from '../features/Home/pages/HomePage';
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
]);

export default router;