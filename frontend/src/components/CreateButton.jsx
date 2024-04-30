import { Row, Col,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdAddToPhotos } from "react-icons/md";

function CreateButton() {
    return (
        <>
            <Row className="justify-content-md-center p-2 text-end">
                <Col>
                    <Link to='/create'>
                        <Button>
                            Create Event
                            <MdAddToPhotos className="mx-2" size="25px"/>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default CreateButton
