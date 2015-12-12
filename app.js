/**
 * Created by haileykeen on 12/12/15.
 */
var profile = require("./profile.js");


var users = process.argv.slice(2);
users.forEach(profile.get);

