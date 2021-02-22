
const express = require('express');
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const app = express();


const items = ["Enter Todo Item"];
const workItems = ["Enter Work Todo Item"];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get('/', (req, res) => {

  const day =  date.getDate();

  res.render('list', {listTitle: day, newListItems: items});
});


app.post("/", (req, res)=>{

    const item = req.body.newItems;

    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/")
    }
    console.log(req.body.list)
})


app.get("/about", (req, res) =>{

    res.render("about")


})

app.get("/work", (req, res) =>{
    res.render("list", {listTitle: "Work List", newListItems: workItems})
    
    });





app.listen(3000, () => console.log(`listening on port 3000!`));
