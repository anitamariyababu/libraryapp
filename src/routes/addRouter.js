const express = require('express');
const addRouter=express.Router();
function router(nav){
addRouter.get('/',function(req,res){
    res.render('addbook',{
        nav,
        title:'Library'
    });
});
addRouter.get('/add',function(req,res){
    res.send("Hey am added");
})
 return addRouter;
}
module.exports=router;