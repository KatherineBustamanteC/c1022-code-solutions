var student = {
  firstName: 'Katherine',
  lastName: 'Bustamante',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesinIrvine = true;

student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesinIrvine);

console.log('value of student.previousOccupation:', 'student');

console.log('value of student:', student);

var vehicle = {
  make: 'subaru',
  model: 'outback',
  year: 2022
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;

console.log("value of vehicle['color']:", vehicle['color']);

console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);

console.log('value of vechicle:', vehicle);

var pet = {
  name: 'Bobby',
  type: 'Labrador'
};

delete pet.name;
delete pet.type;

console.log('value of pet:');
console.log(pet);
