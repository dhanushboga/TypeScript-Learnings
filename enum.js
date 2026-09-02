"use strict";
// enum
var Role;
(function (Role) {
    Role["Admin"] = "boga";
    Role["User"] = "dhanush";
    Role["Guest"] = "kumar";
})(Role || (Role = {}));
let role = Role.Guest;
console.log(role);
