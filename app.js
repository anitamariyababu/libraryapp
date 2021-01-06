const express = require('express');
const app = express();

const nav=
[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Addbook'
    },
    {
        link:'/signin',name:'SignOut'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/signin',name:'SignIn'
    }
];
const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorRouter=require('./src/routes/authorRoutes')(nav)
const signupRouter=require('./src/routes/signupRouter')(nav)
const signinRouter=require('./src/routes/signinRouter.js')(nav)
const addRouter=require('./src/routes/addRouter.js')(nav)

app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
    });

});



app.listen(5600);
