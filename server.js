var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
  const links = `<h3><a href="https://c0870340-dipinkhatri.azurewebsites.net/name"> Go to your name </a></h3><br>
  <h3><a href="https://github.com/Dipin101/node_express_github_actions">Github Project</a></h3><br>
  <h3><a href="https://c0870340-dipinkhatri.azurewebsites.net/admin">Go to admin page</a></h3>
  `;
    res.send(links);
})

//http://localhost:3000/
app.get('/name', function (req, res) {
  res.send("<h1>c870340 - Dipin Khatri</h1>")
})

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Welcome to Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
