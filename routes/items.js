const express = require("express");
const router = express.Router();

let data = [
    {
        id: 1,
        title: "Create a project",
        order: 1,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 2,
        title: "Take a coffee",
        order: 2,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 3,
        title: "Write new article",
        order: 3,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 4,
        title: "Walk toward home",
        order: 4,
        completed: false,
        createdOn: new Date(),
    },
    {
        id: 5,
        title: "Have some dinner",
        order: 5,
        completed: false,
        createdOn: new Date(),
    },
];

router.get("/", function(req, res){
    res.status(200).json(data);
});

router.get("/:id", function(req, res){
    let found = data.find(function(item){
        return item.id === parseInt(req.params.id);
    });

    if(found){
        res.status(200).json(found);
    }else{
        res.sendStatus(404);
    }
});

router.post("/", function(req, res){
    const newItem = {
        id: data.length + 1,
        title: req.body.title,
        order: req.body.order,
        completed: req.body.completed,
        createdOn: new Date(),
    };

    data.push(newItem);
    res.status(201).json(data);
});


router.put("/:id", function(req, res){
    let found = data.find(function(item){
        return item.id === parseInt(req.params.id);
    });

    if(found){
        found.title = req.body.title;
        found.order = req.body.order;
        found.completed = req.body.completed;
        res.sendStatus(204);
    }else{
        res.sendStatus(404);
    }
});

router.delete("/:id", function(req, res){
    let index = data.findIndex(function(item){
        return item.id === parseInt(req.params.id);
    });

    if(index !== -1){
        data.splice(index, 1);
        res.sendStatus(204);
    }else{
        res.sendStatus(404);
    }
});

module.exports = router;
