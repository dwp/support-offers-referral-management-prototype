const fs = require('fs');

// Copying the file to a the same name
fs.copyFile("node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js", "app/assets/javascripts/accessible-autocomplete.min.js", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
});
fs.copyFile("node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.js.map", "app/assets/javascripts/accessible-autocomplete.min.js.map", (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
 
fs.copyFile("node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.css", "app/assets/css/accessible-autocomplete.min.css", (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });
   
  