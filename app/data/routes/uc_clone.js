
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.get('/uc_clone/agent-home', function (req, res) {
    res.render('../views/uc_clone/agent-home.html');
});


// CLAIMANT
router.get('/uc_clone/claimant-search',(req, res) => {
    res.render('../views/uc_clone/claimant-search.html', {
        navLocation: 'todo'
    });
});

router.get('/uc_clone/claimant-view', (req, res) => {
    res.render('../views/uc_clone/claimant-view.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-appointment', (req, res) => {
    res.render('../views/uc_clone/claimant-book-appointment.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-appointment-wc', (req, res) => {
    res.render('../views/uc_clone/claimant-book-appointment-wc.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-slot', (req, res) => {
    res.render('../views/uc_clone/claimant-book-slot.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-further', (req, res) => {
    res.render('../views/uc_clone/claimant-book-further.html', {
        navLocation: 'claimant'
    });
});


router.get('/uc_clone/claimant-book-confirm', (req, res) => {
    res.render('../views/uc_clone/claimant-book-confirm.html', {
        navLocation: 'claimant'
    });
});

//DIART



router.get('/uc_clone/diary', (req, res) => {
    res.render('../views/uc_clone/diary.html', {
        navLocation: 'diary'
    });
});

module.exports = router;