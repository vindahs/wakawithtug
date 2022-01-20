var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/news', function(req, res, next) {
    res.render('news', { title: 'Express' });
});

router.get('/project', function(req, res, next) {
    res.render('projects', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Express' });
});

router.get('/project-single', function(req, res, next) {
    res.render('project-single', { title: 'Express' });
});

router.get('/project-single1', function(req, res, next) {
    res.render('project-single1', { title: 'Express' });
});

router.get('/project-single2', function(req, res, next) {
    res.render('project-single2', { title: 'Express' });
});

router.get('/project-single3', function(req, res, next) {
    res.render('project-single3', { title: 'Express' });
});

router.get('/project-single4', function(req, res, next) {
    res.render('project-single4', { title: 'Express' });
});

router.get('/projec1', function(req, res, next) {
    res.render('projec1', { title: 'Express' });
});

router.get('/projec1', function(req, res, next) {
    res.render('projec1', { title: 'Express' });
});

router.get('/projec2', function(req, res, next) {
    res.render('projec2', { title: 'Express' });
});

router.get('/projec3', function(req, res, next) {
    res.render('projec3', { title: 'Express' });
});
module.exports = router;
