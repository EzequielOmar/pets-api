let express = require("express");
let petApi = require('./controllers/petApi');
let router = express.Router();

//pets routes
router.get("/", petApi.allPets);
router.post("/", petApi.newPet);
router.get("/:id(\\d+)/", petApi.OnePet);
router.patch("/:id(\\d+)/", petApi.PatchPet);
router.delete("/:id(\\d+)/", petApi.DeletePet);
module.exports = router;
