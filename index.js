const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse form data - THIS IS REQUIRED for req.body to work
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/', newMessageRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});