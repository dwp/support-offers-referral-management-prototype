

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// V1_2-3 Identify, match and refer – duplicate referrals /////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////  AVAILABLE OPPORTUNITIES ///////////////
// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2d', function (req, res) {
    var answer = req.session.data['select-programme']
    console.log(answer, 'submitted-answer')

    if (answer === 'restart') {
        // Send user to restart-suitability page
        res.redirect('identify-match-refer/V1_2-1/restart/restart')
    } else if (answer === 'pioneer-dc') {
        // Send user to pioneer dc page
        res.redirect('identify-match-refer/V1_2-3/duplicate-referral/whp-pioneer/whp-pioneer/pioneer-dc')
    } else if (answer === 'pioneer-ee') {
        // Send user to pioneer ee page
        res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-ee')
    } else if (answer === 'pioneer-m') {
        // Send user to pioneer m page
        res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-m')
    } else if (answer === 'pioneer-mee') {
        // Send user to pioneer mee page
        res.redirect('identify-match-refer/V1_2-3/whp-pioneer/pioneer-mee')
    } else if (answer === 'whp-dc') {
        // Send user to whp dc page
        res.redirect('identify-match-refer/V1_2-3/whp-core/whp-dc')
    } else if (answer === 'whp-ee') {
        // Send user to whp ee page
        res.redirect('identify-match-refer/V1_2-3/whp-core/whp-ee')
    } else if (answer === 'whp-m') {
        // Send user to whp m page
        res.redirect('identify-match-refer/V1_2-3/whp-core/whp-m')
    } else if (answer === 'whp-mee') {
        // Send user to whp mee page
        res.redirect('identify-match-refer/V1_2-3/whp-core/whp-mee')
    } else {
        res.redirect('identify-match-refer/V1_2-2/available-opportunities-error')
    }
});

