const Model = require("../models/equipmentModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("equipment data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/checklogin", (req, res) => {
    
    let formdata = req.body;
    Model.findOne({username : formdata.username})
      
      .then((data) => {
          if(data){
              if(data.password == formdata.password){
                res.status(200).json(data);
              }else{
                res.status(500).json({status : 'error'});
              }
          }else{
            res.status(500).json({status : 'error'});
          }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;