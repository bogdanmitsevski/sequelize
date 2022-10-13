require('dotenv').config();
import express from 'express';
import root from './routers/userRouter';
import db  from './models';
const port = process.env.PORT || 3205;
const app = express();
app.use(express.json());
app.use('/', root);

async function main() {
    try{
        app.listen(port, async()=>{
            await db.sequelize.authenticate();
            console.log(`Server is working on PORT ${port}`);
        })
    }
    catch(e){
        console.log(e);
    }
}

main();