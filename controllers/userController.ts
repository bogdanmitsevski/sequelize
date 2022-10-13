import express from 'express';
import db  from '../models';
import user from '../models/user';
class Controller {
    async saveData (req: express.Request, res: express.Response) {
    try {
        const{uuid, name, email, role} = req.body;
    const newUser = await db.User.create({uuid, name, email, role});
    await newUser.save();
    res.json(newUser);
    }
    catch(e) {
        console.log(e);
        res.json(e);
        
    }
    }
    async getAllData (req:express.Request, res:express.Response) {
    try{
        const users = await db.User.findAll();
        res.json(users);

    }
    
    catch(e) {
        console.log(e);
    }
}

async getSomeData (req:express.Request, res:express.Response) {
    try{
        const newId = req.params.id;
        const users = await db.User.findOne({
            where: {id:newId},
            include: 'posts'
        });
        res.json(users);

    }
    
    catch(e) {
        console.log(e);
    }
}

async createPost (req:express.Request, res:express.Response) {
    try{
        const {uuid, body} = req.body;
        const user = await db.User.findOne({
            where: {uuid:uuid}
        });
        const post = await db.Post.create({body, userId:user.id});
        await post.save();
        res.json(post);

    }
    
    catch(e) {
        console.log(e);
    }
}

async getPost (req:express.Request, res:express.Response) {
    try{
        
        const post = await db.Post.findAll({include: [db.User]});
        res.json(post);

    }
    
    catch(e) {
        console.log(e);
    }
}


async deleteSomeData (req:express.Request, res:express.Response) {
    try{
        const newId = req.params.id;
        const users = await db.User.findOne({
            where: {id:newId},
        });
        await users.destroy();
        res.json({message:`User with id ${newId} was deleted`});

    }
    
    catch(e) {
        console.log(e);
    }
}

async putSomeData (req:express.Request, res:express.Response) {
    try{
        const newId = req.params.id;
        const {uuid, name, email, role} = req.body;
        const users = await db.User.findOne({
            where: {id:newId},
        });
        users.uuid = uuid;
        users.name = name;
        users.role = role;
        await users.save();
        res.json(users);

    }
    
    catch(e) {
        console.log(e);
    }
}




    
}


export default new Controller;