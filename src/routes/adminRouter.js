const express = require('express');
const adminRouter=express.Router();
function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav,
        title:'Library'
    });
});
adminRouter.get('/admin',function(req,res){
    res.send("Hey am added");
})
 return adminRouter;
}
module.exports=router;