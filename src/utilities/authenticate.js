module.exports = (req,res,next) => {
    console.log("checking");
    if(req.isAuthenticated())
        {
            return next();
        }
    else
        res.redirect('/api/fail');
}