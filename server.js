require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenxeRoutes');

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

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('partials/login'); // Assuming 'login.handlebars' is located in the 'partials' directory
});
app.get('/', (req, res) => {
    res.render('layouts/main'); // Assuming 'login.handlebars' is located in the 'partials' directory
});

app.get('/auth/signup', (req, res) => {
    // Render the sign-up page here
    res.render('signup'); // Assuming 'signup' is the name of your sign-up page template
});

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});