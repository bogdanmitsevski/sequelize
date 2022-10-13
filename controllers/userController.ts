import express from 'express';
import db  from '../models';
class Controller {
    async getData (req: express.Request, res: express.Response) {
    try {
        const{name, email, role} = req.body;
    const newUser = await db.User.create({name, email, role});
    await newUser.save();
    res.json(newUser);
    }
    catch(e) {
        console.log(e);
        
    }
    }
    
}


export default new Controller;