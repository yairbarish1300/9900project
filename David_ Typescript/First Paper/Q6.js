"use strict";
var RelationshipStatus;
(function (RelationshipStatus) {
    RelationshipStatus["notInARelationship"] = "Ravak!";
    RelationshipStatus["married"] = "Married";
    RelationshipStatus["divorced"] = "Divorced";
    RelationshipStatus["widow"] = "Widow";
    RelationshipStatus["NONE"] = "Does not wanna talk about this";
})(RelationshipStatus || (RelationshipStatus = {}));
const toUpper = (a) => console.log(a.toUpperCase());
const david = RelationshipStatus.married;
toUpper(david);
