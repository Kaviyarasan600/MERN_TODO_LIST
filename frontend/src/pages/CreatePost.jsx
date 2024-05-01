import { Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useState,useRef } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"


function CreatePost() {
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [event,setEvent] = useState("")
    const [isLoading, setLoading] = useState(false)
    const toastId = useRef(null)

    const onSubmitHandler = async(e)=>{
        e.preventDefault()
        if(!title || !event){
            if(!toast.isActive(toastId.current)){
                toastId.current = toast.error("Title & Event Field Required")
            }
            return;
        }
        if(title.length > 18){
            if(!toast.isActive(toastId.current)){
                toastId.current = toast.error("Title must be lesser or equal 18 character value")
            }
            return;
        }
        try {
            setLoading(true)
            const response = await fetch("https://mern-todo-list-a6up.onrender.com/post/create",{
                method : "POST",
                headers :{
                    "Content-Type" : "application/json" 
                },
                body: JSON.stringify({
                    title, event
                })
            })
            const timeFunction = () =>
                {
                    if(response.ok){
                    navigate('/')
                    setLoading(false)
                    if(!toast.isActive(toastId.current)){
                        toastId.current = toast.success("Created")
                    }
                    }
                }
                setTimeout(timeFunction,1000)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <FormContainer>
            <h1 className="text-center">Create Post</h1>
            <Form className="d-flex flex-column" onSubmit={onSubmitHandler}>
                <Form.Group className="my-3">
                    <Form.Label htmlFor="title">
                        Title
                    </Form.Label>
                    <Form.Control type='text' id="title" placeholder="Title" value={title} onChange={(e)=>(setTitle(e.target.value))}/>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label htmlFor="event">
                        Event
                    </Form.Label>
                    <Form.Control as='textarea' rows={4} id="event" placeholder="Event" value={event} onChange={(e)=>(setEvent(e.target.value))} />
                </Form.Group>
                <Form.Group className="d-flex gap-2 justify-content-end">
                    <Link to='/'>
                        <Button className="align-self-end" disabled= {isLoading}>
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" className="align-self-end" disabled= {isLoading}>
                        {
                            !isLoading ? <span>Add Event</span> :
                            (
                                <>
                                    <span role="status">Adding...</span>
                                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span> 
                                </>
                            )
                        }
                    </Button>
                </Form.Group>
            </Form>
        </FormContainer>
    )
}

export default CreatePost
