import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { getUserById } from './models/user.server.js';

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the directory where your templates are located

// get routes
app.get('/', (req, res) => res.render('index'));

app.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId);

  res.render('user', { user }); // Render the EJS template with the user data
});

// end 
app.listen(process.env.PORT || port, () => console.log(`Peter's app listening at http://localhost:${port}`))