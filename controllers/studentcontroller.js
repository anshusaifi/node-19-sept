const Student = require('../models/Student');

async function addStudent(req,res){
    try {
        console.log(req.body,'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log("data saved Succesfully..");
        res.end("data added...")

    } catch (error) {
        console.log(error)
    }
}

async function getStudent(req,res){
    try {
        let students = await Student.find({});
        console.log(students);
        res.send(students);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addStudent,
  getStudent
}
