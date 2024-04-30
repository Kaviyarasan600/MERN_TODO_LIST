import expressAsyncHandler from "express-async-handler";
import POST from "../module/postModule.js";

const CreatePost = expressAsyncHandler(async(req,res)=>{
    const {title, event} = req.body
    if(!title, !event){
        res.status(400)
        throw new Error ('Title and Event Field are Required')
    }
    const post = await POST.create({
        title, event
    })
    if(post){
        res.status(201).json(post)
    }else{
        res.status(500).json(error.message)
    }
})

const getPosts = expressAsyncHandler(async(req,res)=>{
    const post = await POST.find({})
    if(post){
        res.status(200).json(post)
    }else{
        res.status(500).json(error.message)
    }
})

const getEvent = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params
    const post = await POST.findById(id)
    if(post){
        res.status(200).json(post)
    }else{
        res.status(500).json(error.message)
    }
})

const PostUpdate = async(req,res,next)=>{
    const {id} = req.params
    try {
        const post = await POST.findById(id)
        if(!post){
            res.status(404)
            const error = new Error ('Not Found')
            return next(error)
        }
        post.title = req.body.title || post.title
        post.event = req.body.event || post.event

        const update = await post.save()
        res.status(200).json(post)
    } catch (error) {
        if(error.name === "CastError" || error.kind === "ObjectId"){
            return res.status(404).json('Event Not Found')
        }
        res.status(500).json(error.message)
    }
}

const PostDelete = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params
    if(!id){
        res.status(404)
        throw new Error("Event Not Found")
    }
    const post = await POST.findByIdAndDelete(id)
    if(post){
        res.status(200).json("Event Deleted")
    }else{
        res.status(500).json(error.message)
    }
})

export {CreatePost, getPosts, getEvent, PostUpdate, PostDelete}