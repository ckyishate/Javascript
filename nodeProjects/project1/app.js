const express = require('express');

// express app
const app = express();

// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);


//middleware and static files

app.use(express.static('public'));

app.get('/', (req, res) => {

    const blogs=[
        {title: 'Yoshi fins eggs', snippet:'todayy uis the day the supervisor is coming'},
        {title: 'Yoshi fins eggs', snippet:'todayy uis the day the supervisor is coming'},
        {title: 'Yoshi fins eggs', snippet:'todayy uis the day the supervisor is coming'},
        {title: 'Yoshi fins eggs', snippet:'todayy uis the day the supervisor is coming'}
    ]

    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.sendFile('/views/about.html', {root: __dirname} );
    res.render('about', { title: 'about' });
});

//redirecting a page 

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: 'create a new blog' });
});

//404 page not found
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});