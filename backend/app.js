const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/dbConnection");
const signUpController = require("./controllers/users/signUpController");
const usersRouter = require("./api/usersAPI");
const userController = require("./controllers/users/updateUserController");
const projectsRouter = require("./api/projectsAPI");
const createProjectRouter = require("./controllers/projects/createProjects");
const projectController = require("./controllers/projects/updateProject");
const attendanceController = require("./controllers/projects/attendanceControllers");
const attendanceAPI = require("./api/attendancesAPI");
const onlyUpdate = require("./controllers/projects/onlyUpdate");
const actionsRouter = require("./api/actionsAPI");
const actionsCreate = require("./controllers/actions/createActions");
const updateAction = require("./controllers/actions/updateAction");
const AllActions = require("./api/TotalActions");
const AllAtendance = require("./api/TotalAttendance");

const app = express();
app.use(cors());
app.use(express.json());

dbConnection.connect((err) => {
    if(err){
        console.error("Failed to connect", err);
        return;
    }
    console.log("Connected");
});

app.use('/users', signUpController);
app.use('/api', usersRouter);
app.use('/update', userController);
app.use('/project', projectsRouter);
app.use('/projects', createProjectRouter);
app.use('/selected', projectController);
app.use('/list', attendanceController);
app.use('/attendance', attendanceAPI);
app.use('/only', onlyUpdate);
app.use('/apiActions', actionsRouter);
app.use('/apiCreate', actionsCreate);
app.use('/apiActionsUpdate', updateAction);
app.use('/all', AllActions);
app.use('/attendanceDetails', AllAtendance);

app.get('/', (req, res) => {
    res.send('Node server is working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});