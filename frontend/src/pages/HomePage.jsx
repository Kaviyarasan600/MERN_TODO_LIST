import { Container, Spinner} from "react-bootstrap"
import CreateButton from "../components/CreateButton"
import { useEffect, useRef, useState } from "react"
import { EventsList } from "../components/EventsList";
import { toast } from "react-toastify"



function HomePage() {
    const [EventData, setEventData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const toastId = useRef(null)


    const getPost = async()=>{
        try {
            setIsLoading(true)
            const response = await fetch("https://mern-todo-list-a6up.onrender.com/post/posts")
            const data = await response.json()
            if(response.ok){
                setEventData(data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const DeletePost = async(id)=>{
        try {
            const response = await fetch(`https://mern-todo-list-a6up.onrender.com/post/delete/${id}`,{
                method: "DELETE"
            })
            if(response.ok){
                if(!toast.isActive(toastId.current)){
                    toastId.current = toast.success("Deleted")
                }
                getPost()
                return;
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getPost()
    },[])

    return (
        <Container fluid>
            <CreateButton />
            {
                isLoading ? <Spinner className="position-absolute top-50 start-50 fs-6" animation="border" size="xxl" /> : <EventsList EventData= {EventData} DeletePost={DeletePost}/>
            }
        </Container>
    )
}




export default HomePage;
