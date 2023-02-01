const express=require("express");
const dotenv=require("dotenv");
const connectToDb=require("./Db");
const cors=require('cors');
const userrouter=require('./router/userRouter')

const app=express();
dotenv.config();
connectToDb();
app.use(cors());
app.options('*',cors())
//cors
app.use(express.json());
app.use('/users',userrouter);

const PORT=process.env.PORT;

app.listen(PORT,
    ()=>{
        console.log("Port is Running");
    }
)

