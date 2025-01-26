import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MouseMove from './Pages/MouseMove.tsx'
import MouseDrag from './Pages/MouseDrag.tsx'
import Counter from './Pages/Counter.tsx'
import EventPage from './Pages/EventPage.tsx'
import GunPage from './Pages/GunPage.tsx'
import MultitabPage from './Pages/MultitabPage.tsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'mousemove',
                element:<MouseMove/>
            },
            {
                path:'mousedrag',
                element:<MouseDrag/>
            },
            {
                path:'counter',
                element: <Counter/>
            },
            {
                path: 'event',
                element: <EventPage/>
            },
            {
                path: 'gun',
                element: <GunPage/>
            },
            {
                path: 'tabform',
                element: <MultitabPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
