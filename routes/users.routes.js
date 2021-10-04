const express = require('express');
const router = express.Router();
const usersData = require('../data/users');

router.get('/', (req,res)=> {
    usersData.getAll()
    .then((users)=> {
        res.send(users);
    })
    .catch((error)=> {
        res.status(400).send(error);
    });
});

router.post('/', (req,res)=> {
    const data = req.body;
    usersData.create(data)
    .then((insert)=> {
        res.send(insert)
    })
    .catch((error)=> {
        res.status(400).send(error);
    });
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    usersData.remove(id)
    .then((deleted)=>{
        res.send(deleted);
    })
    .catch((error)=>{
        res.status(400).send(error);
    });
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    usersData.getById(id)
    .then((oneUser)=>{
        res.send(oneUser)
    })
    .catch((error)=>{
        res.status(400).send(error);
    });
})

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    usersData.update(id,data)
    .then((updatedUser)=>{
        res.send(updatedUser)
    })
    .catch((error)=>{
        res.status(400).send(error);
    });
})

module.express = router;