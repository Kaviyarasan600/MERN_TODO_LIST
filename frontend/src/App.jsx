import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';

const route = createBrowserRouter([
  { 
    path : '/', 
    element : <RootLayout />,
    errorElement: <NotFound />,
    children : [
      {path: '/', element : <HomePage />},
      {path: '/create', element : <CreatePost />},
      {path: '/update/:postid', element : <UpdatePost />},
    ]}
])


function App() {

  return (
    <RouterProvider router={route}/> 
  )
}

export default App
