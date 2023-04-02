const figlet = require("figlet");

figlet("Va Bene lo Stessoo", (err, data) => {
  if (err) {
    console.log("Riprova...");
    console.dir(err);
    return;
  }
  console.log(data);
});
