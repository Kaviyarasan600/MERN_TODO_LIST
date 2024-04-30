import { Container, Row, Col } from "react-bootstrap";

function FormContainer({children}) {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5 p-3" xs={1}>
                <Col xs={12} md={8} className="card p-3 shadow-sm">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
