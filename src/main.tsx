import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MouseMove from './Pages/MouseMove.tsx'
import MouseDrag from './Pages/MouseDrag.tsx'
import Counter from './Pages/Counter.tsx'
import EventPage from './Pages/EventPage.tsx'
import GunPage from './Pages/GunPage.tsx'
import MultitabPage from './Pages/MultitabPage.tsx'
import HeavyTask from './Components/HeavyTask.tsx';
import APIPagination from './Components/APIPagination.tsx'
import ClientPagination from './Components/ClientPagination.tsx'
import AutoComplete from './Components/AutoComplete.tsx'
import Accordion from './Components/Accordion.tsx'
import NestedComments from './Components/NestedComments.jsx'
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
            },
            {
                path: 'heavy',
                element: <HeavyTask/>
            },
            {
                path: 'apipagination',
                element: <APIPagination/>
            },
            {
                path: 'clientpagination',
                element: <ClientPagination/>
            },
            {
                path: 'autocomplete',
                element: <AutoComplete/>
            },
            {
                path: 'accordion',
                element: <Accordion/>
            },
            {
                path: '/nestedcomments/:videoId',
                element: <NestedComments lastId={8}/>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
