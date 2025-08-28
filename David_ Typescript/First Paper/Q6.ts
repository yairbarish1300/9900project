enum RelationshipStatus{
    notInARelationship = 'Ravak!',
    married ='Married',
    divorced = 'Divorced',
    widow = 'Widow',
    NONE='Does not wanna talk about this'
}
const toUpper =(a:RelationshipStatus):void=> console.log(a.toUpperCase());

const david = RelationshipStatus.married;

toUpper(david);