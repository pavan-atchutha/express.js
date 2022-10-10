
const express = require("express");
const  student_Act = require("./../controllers/students");
//import { getStudents, getspecStudent, createstudent } from "./../controllers/students";
const router = express.Router();
router.get("/",student_Act.getStudents);
router.get("/:roll", student_Act.getspecStudent);
router.post("/post", student_Act.createstudent);
// router.patch('/patch/:roll', student_Act.updatestudent);
// router.delete('/delect/:roll', student_Act.deletestudent);
module.exports=router;