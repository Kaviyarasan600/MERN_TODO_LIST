const notFound= (req,res,next)=>{
    const error = new Error (`Not Found ${req.originalUrl}`)
    res.status(404)
    return next(error)
}

const errHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message

    res.status(statusCode).json({
        message,
        stack : process.env.ENV === "production" ? null : err.stack
    })
}

export {notFound, errHandler}