import { useState } from "react"
import { Col, Row, Card, Container, Form } from "react-bootstrap"

import { AiFillEdit } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const TodoList = (props) => {
    const {_id,title,event} = props.data
    const[isChecked,setIsChecked] = useState(false)
    const[checkList, setCheckList] =useState("")
    const CheckedHandler = (id)=>{
            if(_id === id){
                setIsChecked(!isChecked)
                setCheckList(_id)
            }
            return;
    }
    return (
        <Col key={_id} xs={10} md={6} lg={4} className="mb-3">
            <Card
                className={
                    isChecked && checkList === _id ? "border-3 border-success shadow-sm" : "shadow-sm"
                }
            >
                <Card.Body>
                        <Row className="mb-2">
                            <Col xs={8} md={7} lg={8}>{title}</Col>
                            <Col className="d-flex gap-3 justify-content-end"  >
                                {
                                isChecked && checkList === _id ? <FaAward className="text align-self-center" /> : null
                                }
                                
                                <Form.Check  className="text text-end"  onClick={()=>CheckedHandler(_id)} onChange={(e)=>setIsChecked(e.target.checked)}/>
                            </Col>
                        </Row>
                        <Card.Text>
                            {event}
                        </Card.Text>
                </Card.Body>
                <Container fluid className="bg-primary-subtle p-1 mb-1">
                    <Row xs= {3} className="text text-center">
                            <Col>
                                <FaRegHeart className="text text-center align-self-center" role="button" />
                            </Col>
                            <Link  className="align-self-center" to={`/update/${_id}`}>
                                <AiFillEdit role="button" className="text-dark-emphasis"/>
                            </Link>
                            <Col className="">
                                <MdDeleteForever role="button" className="text-danger fs-4" onClick={()=>props.DeletePost(_id)}/>
                            </Col>
                    </Row>
                </Container>
            </Card>
        </Col>
    )
}
