import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html"); 

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id)
})

app.use(express.json());

app.use(routes); 

http.listen(3333, () => console.log("Server is running on port 3333"))