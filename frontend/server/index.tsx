import fs from "fs";
import path from "path";
import express from "express";
import {createElement} from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router";
import App from "../client/app";

const app = express();
const PORT = process.env.PORT || 8081;
const html = fs.readFileSync(path.resolve("dist","index.html"),"utf-8");

app.use(express.static("dist"));
app.get("*",(req, res)=>{
    const rootElement = createElement(StaticRouter,null,App)
    const renderString = renderToString(rootElement);
    const result = html.replace(`<div id="root"></div>`,`<div id="root">${renderString}</div>`);
    console.log("result : " + result);
    res.send(result);
});

app.listen(PORT,() => console.log(`express is running at http://localhost:${PORT}`));
