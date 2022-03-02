import "reflect-metadata"
import express from "express";
import "./database"
import "./shared/container"
import { router } from "./module/Video/routes";

const app = express()

app.use(express.json())
app.use(router);

app.listen(5555,()=> console.log("Server on port 5555"))