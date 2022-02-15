import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import { Request, Response } from "express";
import UserModel from "./mongoose/User/UserModel";
import TuitModel from "./mongoose/Tuit/TuitModel";

const express = require("express");
const mongoose = require("mongoose");

//create a app
const app = express();

//mongoDB
const dbUrl = "mongodb+srv://yongxi:123zhou@tuiter.87xcz.mongodb.net/tuiter?retryWrites=true&w=majority";

mongoose.connect(dbUrl).then(() => {
    console.log("DB is connected");

})

app.get("/hello", (req: Request, res: Response) => res.send("Hello World!"));

app.get("/add/:a/:b", (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b)
);

//create data
// app.get("/adduserone", (req: Request, res: Response) => {
//     const user1 = new UserModel({
//         username: "alice",
//         password: "alice123",
//         firstName: "Alice",
//         lastName: "Wonderland",
//         email: "alice@wonderland.com",
//     })
//     user1.save().then((result: any) => {
//         res.send(result)
//     }).catch((err: any) => {
//         console.log(err);

//     })

//     const bob = new UserModel({
//         username: "bob",
//         password: "bob321",
//         firstName: "Bob",
//         lastName: "Hope",
//         email: "bob@hope.com",
//     });
//     bob.save()

//     const charlie = new UserModel({
//         username: "charlie",
//         password: "charlie432",
//         firstName: "Charlie",
//         lastName: "Brown",
//         email: "charlie@peanuts.com",
//     });
//     charlie.save()

//     const nasa = new UserModel({
//         username: "nasa",
//         password: "nasa321",
//         firstName: "NASA",
//         lastName: "Bov",
//         email: "space@nasa.gov",
//     });
//     nasa.save()

//     const spacex = new UserModel({
//         username: "spacex",
//         password: "spacex420",
//         firstName: "SpaceX",
//         lastName: " ",
//         email: "elon@spacex.com",
//     });
//     spacex.save()
// })



// app.get("/addtuit", (req: Request, res: Response) => {
//     const spacex1 = new TuitModel({
//         tuit: "In 2021, our @NASAPersevere Mars rover landed and our Ingenuity helicopter took flight. Two asteroid missions launched to the skies, and another began its journey home to Earth. A look back at highlights for our #NASAScience planetary missions: https://go.nasa.gov/32zX2fE",
//         postedOn: new Date("2021/12/25"),
//         postedBy: '62032e7311f74d421d12004d'
//     });

//     spacex1.save().then((result: any) => {
//         res.send(result);
//     }).catch((err: any) => {
//         console.log(err);
//     });

//     const NASA = new TuitModel({
//         tuit: "@SpaceX Dragon spacecraft returns to Earth with @ISS_Research that could help us better understand neurodegenerative diseases, gene expression, & muscle atrophy. Undocking from the @Space_Station is at 9:05am ET (13:05 UT). Watch:",
//         postedOn: new Date("2021/12/25"),
//         postedBy: '62032e7311f74d421d12004e'
//     });

//     NASA.save()
// });

//heroku
const PORT = 4000;
app.listen(process.env.PORT || PORT);

const userController = new UserController(app);
const tuitController = new TuitController(app);
