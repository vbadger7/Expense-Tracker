require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.engine('handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts'),
viewsDir: path.join(__dirname, 'views') }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.render('login');
});


app.get('/signup', (req, res) => {
    res.render('signup'); 
});

app.get('/expense', (req, res) => {
    res.render('expense'); 
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard'); 
});

app.post('/login', (req, res) => {
    res.render('login');
});

console.log('__dirname resolves to:', __dirname);

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

