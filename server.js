import express from "express";
import connectDb from "./database/connectdb.js";
import sellerRouter from "./routes/sellerRoutes.js";
import notesRouter from "./routes/notesRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import OrderRouter from "./routes/orderRoutes.js";
import testrouter from "./routes/test.js";
import cloudinary from "cloudinary"
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

cloudinary.v2.config({
    cloud_name: 'dmw4r46ci',
    api_key: '171478269754415',
    api_secret: 'of0utvihJDwfW741rbva-i7VNhw'
});


const app =express();
const allowedOrigins = ["http://localhost:3000","http://localhost:3001"]; // Update with your frontend's origin(s)
connectDb();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies to be included in requests
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use('/api/v1/sellers',sellerRouter);
app.use('/api/v1/notes',notesRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/orders',OrderRouter);
app.use('/test/uri',testrouter)

// deployement
const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, 'frontend', 'build');

console.log("bpth",buildPath)
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

//-------------

app.listen(5000,()=>{
    console.log("server started on port 5000");
})