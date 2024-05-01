import { Form, Button } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useState,useRef, useEffect } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate, useParams } from "react-router-dom"

function UpdatePost() {
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [event,setEvent] = useState("")
    const [isLoading, setLoading] = useState(false)
    const toastId = useRef(null)
    const {postid} = useParams()

    const singlePost = async()=>{
        try {
            const response = await fetch(`https://mern-todo-list-a6up.onrender.com/post/event/${postid}`)
            const data = await response.json()
            const {title,event} = data
            setTitle(title)
            setEvent(event)
        } catch (error) {
            console.log(error.message)
        }
    }

    const UpdatePost= async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch(`https://mern-todo-list-a6up.onrender.com/post/update/${postid}`,{
                method: "PUT",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({title,event})
            })
            const timeFunction = () =>
            {
                if(response.ok){
                navigate('/')
                setLoading(false)
                if(!toast.isActive(toastId.current)){
                    toastId.current = toast.success("Updated")
                }
                }
            }
            setTimeout(timeFunction,1000)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        singlePost()
    },[])
    return (
        <FormContainer>
            <h1 className="text-center">Edit Task</h1>
            <Form className="d-flex flex-column" onSubmit={UpdatePost}>
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
                            !isLoading ? <span>Save Change</span> :
                            (
                                <>
                                    <span role="status">Loading...</span>
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

export default UpdatePost
