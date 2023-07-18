const express = require("express");
const router = express.Router();
const {
  getallvisques,
  getspvisques,
  createques,
  getspques,
} = require("../controllers/quescontroller");
const validatetoken = require("../middleware/accesstokenhandler");
// Define your routes here, for example:
router.get("/allvis", validatetoken, getallvisques);
router.get("/specvis", validatetoken, getspvisques);

router.get("/spec", validatetoken, getspques);

router.post("/gen", validatetoken, createques);

/*router.route('/:id')
.put(updateques);*/

//router.delete('/:id',validatetoken,deleteques);

//router.route('/input')
//.post(getquesdet)
//or
//router.route('/')
//.get(getcontact);
//.post(createcontact);

//router.route('/:id')
//.put(updatecontact);
//.delete(deletecontact);

// Export the router
module.exports = router;
