const express = require('express');

const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name:'Joseph Barbera',
            dob:'24 March 1911',
            genre:'Cartoon',
            img: "joseph.jpg"
        },
        {
            name:'J k Rowling',
            dob:'31 July 1965',
            genre:'Fantasy',
            img: "rowling.jpg"
        },
        {
            name:'Vaikom Muhammed Basheer',
            dob:'21 January 1908',
            genre:'Drama',
            img: "basheer.jpg"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
       const id= req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });
    return authorsRouter;

}

module.exports=router;