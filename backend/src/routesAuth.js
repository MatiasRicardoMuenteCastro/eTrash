const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const routesAuth = express.Router();

const CompaniesController = require('./controllers/CompaniesController');
const UserController = require('./controllers/UserController');
const PointController = require('./controllers/PointController');
const DiscartController = require('./controllers/DiscartController');
const ProfileController = require('./controllers/ProfileController');
const botController = require('./controllers/botController');

const authMiddleware = require('./middlewares/auth');
const MulterUsers = require('./config/MulterUsers');
const MulterCompanies = require('./config/MulterCompanies');
const MulterPoints = require('./config/MulterPoints');

routesAuth.use(authMiddleware);
routesAuth.use(express.urlencoded({extended: true }));
routesAuth.use(morgan('dev'));

routesAuth.post('/users/upload', multer(MulterUsers).single('file'), UserController.upload);
routesAuth.get('/users', UserController.index);
routesAuth.delete('/users/delete', UserController.delete);

routesAuth.post('/companies/upload', multer(MulterCompanies).single('file'), CompaniesController.upload);
routesAuth.get('/companies', CompaniesController.index);
routesAuth.delete('/companies/delete', CompaniesController.delete);
routesAuth.post('/companies/scheduling', CompaniesController.scheduling);
routesAuth.get('/companies/schedule', CompaniesController.schedule);
routesAuth.delete('/companies/schedule/delete',CompaniesController.scheduleDelete);

routesAuth.post('/point/upload', multer(MulterPoints).single('file'), PointController.upload);
routesAuth.get('/point', PointController.index);
routesAuth.delete('/point/delete', PointController.delete);

routesAuth.put('/discarts/user', DiscartController.userCreate);
routesAuth.put('/discarts/company', DiscartController.companyCreate);
routesAuth.put('/discarts/point', DiscartController.pointCreate);
routesAuth.get('/discarts/points', DiscartController.searchPointForUser);

routesAuth.get('/profile/user', ProfileController.userProfile);
routesAuth.post('/profile/user/avatar', multer(MulterUsers).single('file'), ProfileController.updateUserAvatar);
routesAuth.get('/profile/company', ProfileController.companyProfile);
routesAuth.post('/profile/company/avatar', multer(MulterCompanies).single('file'), ProfileController.updateCompanyAvatar);
routesAuth.get('/profile/point', ProfileController.pointProfile);
routesAuth.post('/profile/point/avatar', multer(MulterPoints).single('file'), ProfileController.updatePointAvatar);

routesAuth.post('/watson/send', botController.sendChat);

module.exports = routesAuth;