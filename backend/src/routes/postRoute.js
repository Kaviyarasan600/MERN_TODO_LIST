import express from "express";
import { CreatePost, PostDelete, PostUpdate, getEvent, getPosts } from "../controller/postController.js";

const route = express.Router()

route.post('/create',CreatePost)
route.get('/posts',getPosts)
route.get('/event/:id',getEvent)
route.put('/update/:id',PostUpdate)
route.delete('/delete/:id',PostDelete)

export default route;
