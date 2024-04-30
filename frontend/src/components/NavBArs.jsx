import { Container,Nav,Navbar } from "react-bootstrap"
import CreateButton from "./CreateButton"


export const NavBArs = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
            <Navbar.Brand href="/" className="fs-2">Todo List</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
