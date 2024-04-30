import { Col } from "react-bootstrap"
import { TriangleExclamation } from "./TriangleExclamation"
import { Link } from "react-router-dom"


export const ZeroEvent = () => {
    return (
        <Col xs={10}className="card p-5 text-center">
            <p className="display-6">There is No Task Found...</p>
            <TriangleExclamation />
            <p className="fs-4">Click Create Event to add Task</p>
            <Link to='/create'>Create Event</Link>
        </Col>
    )
}
