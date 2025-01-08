import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MouseMove from './Pages/MouseMove.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'mousemove',
                element:<MouseMove/>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
