import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { TriangleExclamation } from "../components/TriangleExclamation"

function NotFound() {
    return (
        <Container fluid>
            <Row className="justify-content-center mt-5" xs={12}>
                <Col xs={10}className="card p-5 text-center shadow">
                    <p className="display-6">!Oops Something went wrong. </p   >
                    <TriangleExclamation/>
                    <p className="fs-4">The page you requested was not found <br/>404 Error</p >
                    <Link to='/'>Go back</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
