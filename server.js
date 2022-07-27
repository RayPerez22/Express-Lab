const express = require('express');
const app = express();
const port = 3000
const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#img#', `<img src=${options.img} + 'width= "300" height="400"`)
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') 
app.set('view engine', 'hypatia') 

app.get('/Atlantic_Division',(req,res) => {
    res.render('1',{
       title:"NBA", message:'NBA: Eastern Conference Atlantic Division', img:"https://assets.actionnetwork.com/591938_nba-atlantic-meta.png", content:'The Atlantic Division is one of the three divisions in the Eastern Conference of the National Basketball Association (NBA). The division consists of five teams, the Boston Celtics, the Brooklyn Nets, the New York Knicks, the Philadelphia 76ers and the Toronto Raptors. All teams, except the Raptors, are located on the East Coast of the United States. However, Toronto sports teams have over the years enjoyed rivalries with teams in the Northeastern United States (particularly, Toronto teams also share divisions with Boston and New York teams in Major League Baseball and the National Hockey League.'
    })
})

app.get('/Southeast_Division',(req,res) => {
    res.render('1',{
       title:"NBA", message:'NBA: Eastern Conference Southeast Division', img:"https://assets.actionnetwork.com/323342_nba-southeast-meta.png", content:'The Southeast Division is one of the three divisions in the Eastern Conference of the National Basketball Association (NBA). The division consists of five teams, the Atlanta Hawks, the Charlotte Hornets, the Miami Heat, the Orlando Magic and the Washington Wizards.'
    })
})


app.get('/New_York_Knicks',(req,res) => {
    res.render('2',{
       title:"New York Knicks", message:'Atlantic Division: New York Knicks', img:"https://cdn.wallpapersafari.com/24/46/oHY8ud.jpg", 
    })
})

app.get('/Brooklyn_Nets',(req,res) => {
    res.render('2',{
       title:"Brooklyn Nets", message:'Atlantic Division: Brooklyn Nets', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/255px-Brooklyn_Nets_newlogo.svg.png", 
    })
})

app.get('/Boston_Celtics',(req,res) => {
    res.render('2',{
       title:"Boston Celtics", message:'Atlantic Division: Boston Celtics', img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/300px-Boston_Celtics.svg.png", 
    })
})

app.get('/Philadelphia_76ers',(req,res) => {
    res.render('2',{
       title:"Philadelphia 76ers", message:'Atlantic Division: Philadelphia 76ers', img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/300px-Philadelphia_76ers_logo.svg.png", 
    })
})

app.get('/Toronto_Raptors',(req,res) => {
    res.render('2',{
       title:"Toronto Raptors", message:'Atlantic Division: Toronto Raptors', img:"https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/300px-Toronto_Raptors_logo.svg.png", 
    })
})

app.get('/Miami_Heat',(req,res) => {
    res.render('2',{
       title:"Miami Heat", message:'Southeast Division: Miami Heat', img:"hhttps://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/300px-Miami_Heat_logo.svg.pngttps://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/300px-Toronto_Raptors_logo.svg.png", 
    })
})

app.get('/Atlanta_Hawks',(req,res) => {
    res.render('2',{
       title:"Atlanta Hawks", message:'Southeast Division: Atlanta Hawks', img:"https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/300px-Atlanta_Hawks_logo.svg.png", 
    })
})

app.get('/Charlotte_Hornets',(req,res) => {
    res.render('2',{
       title:"Charlotte Hornets", message:'Southeast Division: Charlotte Hornets', img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/315px-Charlotte_Hornets_%282014%29.svg.png", 
    })
})

app.get('/Washington_Wizards',(req,res) => {
    res.render('2',{
       title:"Washington Wizards", message:'Southeast Division: Washington Wizards', img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/300px-Washington_Wizards_logo.svg.png", 
    })
})

app.get('/Orlando_Magic',(req,res) => {
    res.render('2',{
       title:"Orlando Magic", message:'Southeast Division: Orlando Magic', img:"https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/330px-Orlando_Magic_logo.svg.png", 
    })
})


  app.listen(port, () => {
    console.log("I am listening on port", port);
});