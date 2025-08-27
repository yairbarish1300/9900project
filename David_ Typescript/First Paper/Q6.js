var RelationshipStatus;
(function (RelationshipStatus) {
    RelationshipStatus["notInARelationship"] = "Ravak!";
    RelationshipStatus["married"] = "Married";
    RelationshipStatus["divorced"] = "Divorced";
    RelationshipStatus["widow"] = "Widow";
    RelationshipStatus["none"] = "Does not wanna talk about this";
})(RelationshipStatus || (RelationshipStatus = {}));
var toUpper = function (a) { return console.log(a.toUpperCase()); };
var david = RelationshipStatus.married;
toUpper(david);
