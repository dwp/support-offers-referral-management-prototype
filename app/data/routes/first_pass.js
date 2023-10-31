
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/search', function (req, res) {
    req.session.firstRoute = req.query.route === 'g4s';
    res.locals.route = req.session.firstRoute;
    return res.render('../views/first_pass/search.html');
});

router.post('/search', function (req, res) {
    return res.redirect('/first_pass/home');
});

router.get('/home', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.locals.filled = req.query.filled === 'true'
    res.render('../views/first_pass/home.html', {
        navLocation: 'home'
    });
});

router.get('/config', function (req, res) {
    res.render('../views/first_pass/config.html', {
        navLocation: 'details'
    });
});

//DIARY

router.get('/diary', function (req, res) {
    res.render('../views/first_pass/diary.html', {
        navLocation: 'diary'
    });
});


router.get('/book-appointment/type', function (req, res) {
    res.render('../views/first_pass/book-appt/type.html');
});

router.get('/book-appointment/who', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render('../views/first_pass/book-appt/who.html');
});

router.get('/book-appointment/when', function (req, res) {
    res.render('../views/first_pass/book-appt/when.html');
});

router.get('/book-appointment/further', function (req, res) {
    res.render('../views/first_pass/book-appt/further.html');
});

router.get('/book-appointment/check', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render('../views/first_pass/book-appt/check.html');
});

router.get('/edit-appointment/type', function (req, res) {
    res.render('../views/first_pass/edit-appt/type.html');
});

router.get('/edit-appointment/who', function (req, res) {
    res.locals.route = req.session.firstRoute;
    console.log(res.locals.route);
    res.render('../views/first_pass/edit-appt/who.html');
});

router.get('/edit-appointment/when', function (req, res) {
    res.render('../views/first_pass/edit-appt/when.html');
});

router.get('/edit-appointment/further', function (req, res) {
    res.render('../views/first_pass/edit-appt/further.html');
});


router.get('/edit-appointment/check', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render('../views/first_pass/edit-appt/check.html');
});

module.exports = router;