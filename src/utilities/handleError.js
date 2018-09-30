module.exports = (res,error) => {
    console.log(error);
    res.json({success:false,error:true});
}