import userEvent from "@testing-library/user-event";
import {render, screen} from "@testing-library/react";
import Accordion from "../Components/Accordion";

describe("Accordion Component", () => {
    beforeEach(() => render(<Accordion />))
    test("test Accordion rendering", () => {
        const header = screen.getByText(/Accordion/i);
        expect(header).toBeInTheDocument();
    })
    test("renders all section titles", () => {
        const sections = ['profile', 'education', 'hobbies'];
        sections.forEach(title => {
            const titleNode = screen.getByText(title);
            expect(titleNode).toBeInTheDocument()
        });
    })
    test("section expand/collapse with click", async () => {
        const profileSection = screen.getByText('profile')
        await userEvent.click(profileSection)
        expect(screen.queryByText("name:")).toBeInTheDocument()
        expect(screen.queryByText("lakshman")).toBeInTheDocument()

        await userEvent.click(profileSection)
        expect(screen.queryByText("name:")).not.toBeInTheDocument()
        expect(screen.queryByText("lakshman")).not.toBeInTheDocument()

    })
    // test("expands correct section and collapses others", async () => {
    //     const profileSection = screen.getByText('profile')
    //     await userEvent.click(profileSection)

    // })
})