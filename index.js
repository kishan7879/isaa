var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json())
app.use(express.static('htmlCodes'))
app.use(bodyParser.urlencoded({
    extended: true
}))
mongoose.connect('mongodb://localhost:27017/mydbsignup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))

app.post("/SignUp", (req, res) => {
    var name = req.body.Name;
    var email = req.body.email;
    var password = req.body.password;
    var number = req.body.number;
    var data = {
        "name": name,
        "email": email,
        "password": password,
        "number": number,
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('home.html')
})
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('SignUp.html');
})

app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var data = {
        "email": email,
        "password": password
    }
    db.collection('users').find().toArray(function (err, result) {
        if (err)
            throw err;
        for (var i=0; i<result.length; i++) {
            if (result[i].email == email && result[i].password == password) {
                console.log("Login Successful");
                return res.status(201).redirect('home.html');
            }
        }
        console.log("Login Unsuccessful");
        return res.status(201).redirect('LogIn.html');
    });
})
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('LogIn.html');
})


app.post("/payment", (req, res) => {
    var cardname = req.body.cardname;
    var cardnumber = req.body.cardnumber;
    var expmonth = req.body.expmonth;
    var expyear = req.body.expyear;
    var data = {
        "cardname": cardname,
        "cardnumber": cardnumber,
        "expmonth": expmonth,
        "expyear": expyear,
    }
    db.collection('userspay').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('payment_success.html')
})
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('payment.html');
})

app.post("/product", (req, res) => {
    var title = req.body.title;
    var desc = req.body.desc;
    var price = req.body.price;
    var data = {
        "title": title,
        "desc": desc,
        "price": price,
    }
    db.collection('products').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('home.html')
})


app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('productForm.html');
}).listen(8080);
console.log("Listening on PORT 8080");


app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var data = {
        "email": email,
        "password": password
    }
    db.collection('users').find().toArray(function (err, result) {
        if (err)
            throw err;
        for (var i = 0; i < result.length; i++) {
            if (result[i].email == email && result[i].password == password) {
                console.log("Login Successful");
                return res.status(201).redirect('home.html');
            }
        }
        console.log("Login Unsuccessful");
        return res.status(201).redirect('LogIn.html');
    });
})
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('LogIn.html');
})


// app.post("/payment", (req, res) => {
//     var cardname = req.body.cardname;
//     var cardnumber = req.body.cardnumber;
//     var expmonth = req.body.expmonth;
//     var expyear = req.body.expyear;
//     var data = {
//         "cardname": cardname,
//         "cardnumber": cardnumber,
//         "expmonth": expmonth,
//         "expyear": expyear,
//     }
//     db.collection('userspay').insertOne(data, (err, collection) => {
//         if (err) {
//             throw err;
//         }

//         console.log("Record Inserted Successfully");
//     });
//     return res.redirect('.html')
// })
// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('productPage.html');
// }) 