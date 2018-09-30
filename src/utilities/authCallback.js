function authCallback (req,res,user,err)  {
    if(user)
    {
        req.login(user,(err) => {
            if(err)
            {
                console.log(err);
                return next(err);
            }
            res.json({
                statusCode:200,data:user,success:true
            });
        })
    }
    else if(err && err.statusCode === 404)
    {
        res.json({statusCode:err.statusCode,data:err.data,success:false});
    }
    else
    {
        res.json({statusCode:500,success:false});
    }
}

module.exports = authCallback;