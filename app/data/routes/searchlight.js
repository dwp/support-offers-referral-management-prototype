
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const populateLinks = (session, route) => {
    //v1 /second/home
    //v2 version2/workcoach/edit-appt/search
    const linkObj = {};

    if (route === 'second'){
        linkObj.view = session + '/home';
        linkObj.book = session +'/book-appointment/type';
        linkObj.manage = session + '/appointment';
        linkObj.conduct = session +'/conduct/conduct';
        linkObj.engage = session + '/';
    } else {
        linkObj.view = session + '/diary2';
        linkObj.book = session +'/contact';
        linkObj.manage = session +'/amend-2';
        linkObj.conduct = session +'/attended';
        linkObj.engage = session +'/claimant-view#history';
    }
    return linkObj;
}

router.get('/search', function (req, res) {
    res.locals.searchlightLinks = populateLinks(req.query.search, req.query.search);
    return res.render('../views/searchlight/searchlight.html');
});


router.get('/search-v2', function (req, res) {
    res.locals.searchlightLinks = populateLinks(req.query.search, req.query.search);
    return res.render('../views/searchlight/searchlight-v2.html');
});

router.get('/search-v3', function (req, res) {
    res.locals.searchlightLinks = populateLinks(req.query.search, req.query.search);
    return res.render('../views/searchlight/searchlight-marker.html');
});


module.exports = router;
