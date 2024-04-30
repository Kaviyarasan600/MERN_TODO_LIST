import { useState } from "react"
import { Row} from "react-bootstrap"
import { ZeroEvent } from "./ZeroEvent";
import { TodoList } from "./TodoList";


export const EventsList = (props) => {
    const EventData = props
    const list = EventData.EventData
    const [EventCount] = useState(list.length)
    return (
        <>
            <Row className="d-flex justify-content-center">
                {
                    EventCount ? list.map((e)=>(
                        <TodoList data = {e} key={e._id} DeletePost = {props.DeletePost}/> 
                    )) : <ZeroEvent />
                }
            </Row>
        </>
    )
}
