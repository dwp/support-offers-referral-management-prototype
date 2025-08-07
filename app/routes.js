// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// run this code when a form is submitted to 'report-progress' page

router.post('/report-progress', function (req, res) {
  var answer = req.session.data['what-update']
  if (answer === 'record-an-outcome') {
    // Send user to start on opportunity page
    res.redirect('/referral-management/prap-admin/record-an-outcome')
  } else if (answer === 'raise-query') {
    // Send user to record an outcome page
    res.redirect('/referral-management/prap-admin/raise-a-query')
  } else {
    // Send user to request to end page
    res.redirect('#')
  }
});


// run this code when a form is submitted to 'start-on-opportunity' page. NB: This may need evolving as the journey evolves

router.post('start-date-submitted', function (req, res) {
  var answer = req.session.data['when-did-the-citizen-start']
  if (answer === 'when-started') {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  } else if (answer === 'when-started-2') {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  } else {
    // Send user to start date submitted
    res.redirect('start-date-submitted')
  }
});


// run this code when a form is submitted to 'any of the referrals pages

router.post('/referrals-pending-b', function (req, res) {
  var answer = req.session.data['status']
  if (answer === 'all-referrals') {
    // Send user to all-referrals-b page
    res.redirect('/referral-management/prap-admin/referrals-all-b')
  } else if (answer === 'active-referrals') {
    // Send user to referrals-active-b page
    res.redirect('/referral-management/prap-admin/referrals-active-b')
  } else if (answer === 'pending-referrals') {
    // Send user to referrals-pending-b page
    res.redirect('/referral-management/prap-admin/referrals-pending-b')
  } else if (answer === 'rejected-referrals') {
    // Send user to referrals-returned-b page
    res.redirect('/referral-management/prap-admin/referrals-returned-b')
  } else {
    // Send user to referrals all page
    res.redirect('referrals-all-b')
  }
});


// run this code when a form is submitted to 'record-an-outcome' page

router.post('/record-an-outcome', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'started-self-employment') {
    // Send user to start on opportunity page
    res.redirect('/referral-management/prap-admin/started-self-employment')
  } else if (answer === '6-months-self-employment') {
    // Send user to record an outcome page
    res.redirect('/referral-management/prap-admin/self-employment-details')
  }
});

// run this code when a form is submitted to 'referrals-pending-b' page

router.post('/referrals-pending-b', function (req, res) {
  var answer = req.session.data['which-outcome']
  if (answer === 'started-self-employment') {
    // Send user to start on opportunity page
    res.redirect('/started-self-employment')
  } else
    if (answer === '6-months-self-employment') {
      // Send user to record an outcome page
      res.redirect('/self-employment-details')
    }
});


// *** ROUTING FOR IDENTIFY MATCH AND REFER LAST UPDATED SO BETA SPRINT 1 ***

// run this code when a form is submitted to 'employment and training restrictions' page


router.post('/restrictions', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_0/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_0/sam-doe-address')
  }
});

// run this code when a form is submitted to 'Address details page' page

router.post('/address', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_0/not-suitable-address')
  }
});


// run this code when a form is submitted to 'Contact details a page' page

router.post('/contact', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-a')
  }
});

// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/description-of-restart')
  } else
    if (answer === 'whp') {
      // Send user to record an outcome page
      res.redirect('identify-match-refer/V1_0/description-of-whp')
    }
})


// run this code when a form is submitted to 'opportunity-matched' page

router.post('/match-programme-answers', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_0/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_0/sam-doe-contact-details-update-b')
  }
})

// run this code when a form is submitted to 'opportunity-matched' page

router.post('/match-programme-answers', function (req, res) {
  var answer = req.session.data['which-programme']
  console.log(answer, 'submitted-answer')
  if (answer === 'restart-scheme') {
    // Send user to description of restart page 
    res.redirect('identify-match-refer/V1_0/description-of-restart')
  } else

    if (answer === 'work-health-programme') {
      // Send user to exit page make referral via LMS
      res.redirect('identify-match-refer/V1_0/exit-LMS')
    } else if (answer === 'intensive-personalised-employment-support-programme') {
      // Send user to exit page make referral via LMS
      res.redirect('identify-match-refer/V1_0/exit-LMS')
    }
});

// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart

router.post('/suitable-2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_0/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_0/not-suitable')
  }
});

// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP

router.post('/suitable-whp', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_0/reasonable-adjustments-whp')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_0/whp-not-suitable')
  }
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////// V1_1 Identify, match and refer. ///////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// run this code when a form is submitted to 'employment and training restrictions' page

router.post('/restrictions_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_1/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_1/sam-doe-address')
  }
});

// run this code when a form is submitted to 'Address details page' page

router.post('/address_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_1/not-suitable-address')
  }
});


// run this code when a form is submitted to 'Contact details a page' page

router.post('/contact_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-update-a')
  }
});


// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme_1', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_1/restart-suitability')
  } else if (answer === 'whp') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_1/whp-suitability')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart

router.post('/suitable-2_1', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_1/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_1/not-suitable')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP

router.post('/suitable-whp_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_1/whp-reasonable-adjustments')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_1/whp-not-suitable')
  }
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////// V1_2 Identify, match and refer ////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// run this code when a form is submitted to 'employment and training restrictions' page

router.post('/restrictions_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'sam-doe-address') {
    // Send user to Are the address details correct?
    res.redirect('identify-match-refer/V1_2/sam-doe-address')
  }
});

// run this code when a form is submitted to 'address details' page

router.post('/address_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-a')
  } else if (answer === 'not-suitable-address') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});


// run this code when a form is submitted to 'contact details a' page

router.post('/contact_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-contact-details-b') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-b')
  } else if (answer === 'sam-doe-contact-details-update-a') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-update-a')
  }
});


// run this code when a form is submitted to 'Contact details b page' page

router.post('/contact-b_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'sam-doe-opportunity-matched-c') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/sam-doe-opportunity-matched-c')
  } else if (answer === 'sam-doe-contact-details-update-b') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/sam-doe-contact-details-update-b')
  }
});


// run this code when a form is submitted to 'opportunity-matched-c' page

router.post('/choose-programme_2', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to select an opportunity to make a referral
    res.redirect('identify-match-refer/V1_2/restart-suitability')
  } else if (answer === 'whp') {
    // Send user to record an outcome page
    res.redirect('identify-match-refer/V1_2/whp-suitability')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for Restart'

router.post('/suitable-2_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/reasonable-adjustments')
  } else if (answer === 'not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/not-suitable')
  }
});


// run this code when a form is submitted to 'Review Sam Doe’s eligibility and suitability for WHP'

router.post('/suitable-whp_2_2', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/whp-reasonable-adjustments')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/whp-not-suitable')
  }
});


// run this code when a form is submitted to 'available-opportunities' page

router.post('/choose-programme_2a', function (req, res) {
  var answer = req.session.data['select-programme']
  console.log(answer, 'submitted-answer')

  if (answer === 'restart') {
    // Send user to restart-suitability page
    res.redirect('identify-match-refer/V1_2/restart/restart')
  } else if (answer === 'pioneer-dc') {
    // Send user to pioneer dc page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-dc')
  } else if (answer === 'pioneer-ee') {
    // Send user to pioneer ee page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-ee')
  } else if (answer === 'pioneer-m') {
    // Send user to pioneer m page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-m')
  } else if (answer === 'pioneer-mee') {
    // Send user to pioneer mee page
    res.redirect('identify-match-refer/V1_2/whp-pioneer/pioneer-mee')
  } else if (answer === 'whp-dc') {
    // Send user to whp dc page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-dc')
  } else if (answer === 'whp-ee') {
    // Send user to whp ee page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-ee')
  } else if (answer === 'whp-m') {
    // Send user to whp m page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-m')
  } else if (answer === 'whp-mee') {
    // Send user to whp mee page
    res.redirect('identify-match-refer/V1_2/whp-core/whp-mee')
  }
});

// run this code when a form is submitted to 'whp-dc' page

router.post('/suitable-whp_2_2a', function (req, res) {
  var answer = req.session.data['which-outcome']
  console.log(answer, 'submitted-answer')

  if (answer === 'reasonable-adjustments-whp') {
    // Send user to require extra support or reasonable adjustments to participate in this programme?
    res.redirect('identify-match-refer/V1_2/employment-and-training-restrictions-a')
  } else if (answer === 'whp-not-suitable') {
    // Send user to You cannot refer Sam Doe to Restart
    res.redirect('identify-match-refer/V1_2/whp-not-suitable')
  }
});


/////////////////  RESTART ///////////////

// run this code when a form is submitted to 'employment and training restrictions-a' page

router.post('/restrictions_2a', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/restart/address-a')
  }
});

// run this code when a form is submitted to 'address-a' page

router.post('/address_2a', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/restart/phone-a')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});



/////////////////  WHP-CORE ///////////////


// run this code when a form is submitted to 'employment and training restrictions-whp' page

router.post('/restrictions_2-whp', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/whp-core/address-a')
  }
});

// run this code when a form is submitted to 'whp-core/address-a' page

router.post('/address_2-whp', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/whp-core/phone-a')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});



/////////////////  WHP-PIONEER ///////////////

// run this code when a form is submitted to 'employment and training restrictions-pioneer' page

router.post('/restrictions_2-pioneer', function (req, res) {
  var answer = req.session.data['restrictions']
  console.log(answer, 'submitted-answer')

  if (answer === 'not-suitable-restrictions') {
    // Send user to You must use LMS to make a referral 
    res.redirect('identify-match-refer/V1_2/not-suitable-restrictions')
  } else if (answer === 'suitable') {
    // Send user to 'address-a' page?
    res.redirect('identify-match-refer/V1_2/whp-pioneer/address-pioneer')
  }
});


// run this code when a form is submitted to 'address-pioneer' page

router.post('/address_2-pioneer', function (req, res) {
  var answer = req.session.data['correct-address']
  console.log(answer, 'submitted-answer')

  if (answer === 'correct') {
    // Send user to Are contact details correct?
    res.redirect('identify-match-refer/V1_2/whp-pioneer/contact-details-pioneer')
  } else if (answer === 'incorrect') {
    // Send user to You must use LMS to make a referral
    res.redirect('identify-match-refer/V1_2/not-suitable-address')
  }
});