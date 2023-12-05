import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Wallet from './components/Wallet.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import Recipients from './components/Recipients.jsx';
import Invitation from './components/Invitation.jsx';
import About from './components/About.jsx';
import FAQ from './components/FAQ.jsx';
import Legal from './components/Legal.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Wallet />,
      },
      {
        path: 'recipients',
        element: <Recipients />,
      },
      {
        path: 'invitation',
        element: <Invitation />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'legal',
        element: <Legal />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
