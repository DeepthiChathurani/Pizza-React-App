const contactController={
    submitContactDetail:function (req, res, next) {
        const requestedData = req.body;
        console.log(requestedData);
        res.send('Contact detail resive successful')

    }
}
module.exports=contactController;