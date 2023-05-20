const express = require("express");
const router = express.Router();

let data = [
    {
        id: 1,
        title: "Create a project",
        order: 1,
        completed: true,
        createdOn: new Date()
    },
    {
        id: 2,
        title: "Make a coffee",
        order: 2,
        completed: true,
        createdOn: new Date()
    },
    {
        id: 3,
        title: "Have some meal",
        order: 3,
        completed: true,
        createdOn: new Date()
    },
    {
        id: 4,
        title: "Walk toward home",
        order: 4,
        completed: false,
        createdOn: new Date()
    },
    {
        id: 5,
        title: "Do some workouts",
        order: 5,
        completed: false,
        createdOn: new Date()
    },
];

router.get("/", (req, res)=>{
    res.status(200).json(data);
});

router.get("/:id", (req, res)=>{
    let found = data.find((item)=>{
        return item.id === parseInt(req.params.id);
    });

    if(found){
        res.status(200).json(found);
    }else{
        res.sendStatus(404);
    }
});

router.post("/", (req, res) => {
    const newItem = {
        id: data.length + 1,
        title: req.body.title,
        order: req.body.order,
        completed: req.body.completed,
        createdOn: new Date()
    }
        data.push(newItem);
        res.status(201).json({message: "New data has been added", data: newItem});
});

router.put("/:id", (req, res)=>{
    let found = data.find((item)=>{
        return item.id === parseInt(req.params.id);
    });
    if(found){
        found.title = req.body.title,
        found.order = req.body.order,
        found.completed = req.body.completed,
        res.status(200).json({message: "Data has been updated", data:found});
    }else{
        res.sendStatus(404);
    }
});

router.delete("/:id", (req, res)=>{
    let index = data.findIndex((item)=>{
        return item.id === parseInt(req.params.id);
    });

    if(index !== -1){
        data.splice(index, 1);
        res.status(200).json({message: "Data has been deleted"});
    }else{
        res.sendStatus(404);
    }
})

module.exports = router;
