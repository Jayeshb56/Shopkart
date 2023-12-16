const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
    err.statuscode = err.statuscode || 500;
    
    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statuscode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION'){
        let error = {...err}

        error.message = err.message

        //wrong  mongoose object id error
        if(err.name === 'CastError'){
            const message = `Resources not found. Invalid ${err.path}`
            error = new ErrorHandler(message, 400)
        }
         
        // Handling Mongoose Validation Error
        if(err.name === 'validationError'){
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }

        res.status(error.statuscode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        }) 
    }

  
}