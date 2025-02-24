import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import App from "../App";
import Home from "../Pages/Home"
import MultitabPage from '../Pages/MultitabPage.tsx'
import APIPagination from '../Components/APIPagination.tsx'
import ClientPagination from '../Components/ClientPagination.tsx'
import AutoComplete from '../Components/AutoComplete.tsx'
import Accordion from '../Components/Accordion.tsx'
import NestedComments from '../Components/NestedComments.jsx'
import ScrollAnimator from '../Pages/ScrollAnimator.tsx'
import FolderPage from '../Pages/FolderPage.tsx'

describe("Test App component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/tabform" element={<MultitabPage />} />
                        <Route path="/apipagination" element={<APIPagination />} />
                        <Route path="/clientpagination" element={<ClientPagination />} />
                        <Route path="/autocomplete" element={<AutoComplete />} />
                        <Route path="/accordion" element={<Accordion />} />
                        <Route path="/nestedcomments/123" element={<NestedComments lastId={8}/>} />
                        <Route path="/scroll" element={<ScrollAnimator />} />
                        <Route path="/filesystem" element={<FolderPage />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        )
    })
    it("app render", () => {
        const message = screen.queryByText(/App/i);
        expect(message).toBeVisible();
    })
    test("test all the links", () => {
        const links = [
            'MouseMove', 'MouseDrag', 'Counter', 'EventPage', 'Guns',
            'Tabform', 'heavy task', 'apipagination', 'clientpagination',
            'autocomplete', 'accordion', 'nestedcomments', 'imageslider',
            'scroll', 'file system'
        ];
        links.forEach(linkText => {
            expect(screen.getByText(linkText)).toBeInTheDocument();
        });

    })
    test("outlet render", () => {
        const outletElement = screen.getByText('Home');
        expect(outletElement).toBeInTheDocument();
    })
})
describe("App routing", ()=>{
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/tabform" element={<MultitabPage />} />
                        <Route path="/apipagination" element={<APIPagination />} />
                        <Route path="/clientpagination" element={<ClientPagination />} />
                        <Route path="/autocomplete" element={<AutoComplete />} />
                        <Route path="/accordion" element={<Accordion />} />
                        <Route path="/nestedcomments/123" element={<NestedComments lastId={8}/>} />
                        <Route path="/scroll" element={<ScrollAnimator />} />
                        <Route path="/filesystem" element={<FolderPage />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        )
    })
    test("accordion form routing", async ()=>{
        const accordionLink = screen.getByRole('link', {name:/accordion/i})
        await userEvent.click(accordionLink);
        expect(screen.getByText("Accordion")).toBeVisible()
    })
    test("multitab form routing", async ()=>{
        const tabformLink = screen.getByText('Tabform')
        await userEvent.click(tabformLink);
        expect(screen.getByText("MultiTabPage")).toBeVisible();
    })
})