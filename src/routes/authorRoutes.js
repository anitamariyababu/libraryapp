const express = require('express');

const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name:'Joseph Barbera',
            book:'Tom and Jerry',
            genre:'Cartoon',
            img: "joseph.jpg"
        },
        {
            name:'J k Rowling',
            book:'Harry Potter',
            genre:'Fantasy',
            img: "rowling.jpg"
        },
        {
            name:'Vaikom Muhammed Basheer',
            book:'Paathumayude Aadu',
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