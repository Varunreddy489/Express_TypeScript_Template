import express from "express";

import { apiRoutes } from "./routes";
import { PORT,logger } from "./config";

const app=express();

app.use('/api',apiRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log("Jai Shree Ram");
    logger.info(`Server is running on port ${PORT}`)
}) 

