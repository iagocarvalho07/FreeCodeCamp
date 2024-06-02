import Express from "express";
import dotenv from 'dotenv';
import mustacheExpress from "mustache-express";
import path from "path";
import mainRouter from './routers/index';


dotenv.config();
const server = Express();

server.set("view engine", "mustacheExpress");
server.set('views', path.join(__dirname, "views"))
server.engine("mustache", mustacheExpress());
server.use(Express.static(path.join(__dirname, '../public')));

server.use(mainRouter);
server.use((req, res)=>{
    res.send("Pagina não encontrada ")
})
server.listen(process.env.PORT);