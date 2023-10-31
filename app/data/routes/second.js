
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const path = 'second';

router.get('/search', function (req, res) {
    req.session.firstRoute = req.query.route === 'g4s';
    res.locals.route = req.session.firstRoute;
    return res.render(`../views/${path}/search.html`);
});

router.post('/search', function (req, res) {
    return res.redirect(`/${path}/home`);
});

router.get('/home', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.locals.filled = req.query.filled === 'true'
    res.render(`../views/${path}/home.html`, {
        navLocation: 'home'
    });
});

router.get('/config', function (req, res) {
    res.render(`../views/${path}/config.html`, {
        navLocation: 'details'
    });
});


router.get('/appointment', function (req, res) {
    res.render(`../views/${path}/appointment.html`, {
        navLocation: 'details'
    });
});


//DIARY

router.get('/diary', function (req, res) {
    res.render(`../views/${path}/diary.html`, {
        navLocation: 'diary'
    });
});

//CONDUCT

router.get('/conduct', function (req, res) {
    res.render(`../views/${path}/conduct/conduct.html`, {
        navLocation: 'details'
    });
});


router.get('/unattended', function (req, res) {
    res.render(`../views/${path}/conduct/unattended.html`, {
        navLocation: 'details'
    });
});

router.get('/cancel', function (req, res) {
    res.render(`../views/${path}/conduct/cancel.html`, {
        navLocation: 'details'
    });
});

//BOOK

router.get('/book-appointment/type', function (req, res) {
    res.render(`../views/${path}/book-appt/type.html`);
});

router.post('/book-appointment/type', function (req, res) {
    //req.body -> res.sessison
    res.redirect(`who`);
});

router.get('/book-appointment/who', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render(`../views/${path}/book-appt/who.html`);
});

router.get('/book-appointment/when', function (req, res) {
    res.render(`../views/${path}/book-appt/when.html`);
});

router.get('/book-appointment/further', function (req, res) {
    res.render(`../views/${path}/book-appt/further.html`);
});

router.get('/book-appointment/check', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render(`../views/${path}/book-appt/check.html`);
});

router.get('/edit-appointment/type', function (req, res) {
    res.render(`../views/${path}/edit-appt/type.html`);
});

router.get('/edit-appointment/who', function (req, res) {
    res.locals.route = req.session.firstRoute;
    console.log(res.locals.route);
    res.render(`../views/${path}/edit-appt/who.html`);
});

router.get('/edit-appointment/when', function (req, res) {
    res.render(`../views/${path}/edit-appt/when.html`);
});

router.get('/edit-appointment/further', function (req, res) {
    res.render(`../views/${path}/edit-appt/further.html`);
});


router.get('/edit-appointment/check', function (req, res) {
    res.locals.route = req.session.firstRoute;
    res.render(`../views/${path}/edit-appt/check.html`);
});

module.exports = router;