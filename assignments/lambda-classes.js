// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}!`;
  }
  saySpecialty(){
    return `Instructor ${this.name}'s specialty is ${this.specialty}.`
}
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return `${this.name}'s Subjects: ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has has begun sprint challenge on ${subject}.`;
  }
}

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ` + channel + ` @channel standy times!​​​​​`;
  }
  debugsCode(student, subject){
      return `${this.name} debugs ` + student + `'s code on ` + subject + `.`;
  }
}
// 2 instructors
const britt = new Instructor({
  name: "Britt",
  location: "Canada",
  age: 25,
  favLanguage: "JavaScript",
  specialty: "something",
  catchPhrase: "I love Ada."
});
const christina = new Instructor({
  name: "Christina",
  location: "NY",
  age: 30,
  favLanguage: "React",
  specialty: "something else",
  catchPhrase: "??"
});

//Created 3  students:
const ari = new Student({
  name: "Ari",
  location: "California1",
  age: 36,
  previousBackground: "bio",
  className: "Web23a",
  favSubjects: ["JS", "CSS"]
});
const cassie = new Student({
    name: "Cassie",
    location: "California2",
    age: 34,
    previousBackground: "Scrum Master",
    className: "Web23b",
    favSubjects: ["React", "CSS"]
  });

  const maggie = new Student({
    name: "Maggie",
    location: "California3",
    age: 32,
    previousBackground: "Computer Science",
    className: "Web23c",
    favSubjects: ["HTML", "CSS"]
  });

//Created 3 PMs:
const mychal = new ProjectManager({
  name: "Mychal",
  location: "Bay Area",
  age: 38,
  gradClassName: "CS1",
  className: "Web23",
  favSubjects: "everything",
  favInstructor: "Britt"
});
const winnie = new ProjectManager({
  name: "Winne",
  location: "unk",
  age: 28,
  gradClassName: "CS6",
  className: "Web23",
  favSubjects: "everything",
  favInstructor: "Britt"
});
const ty = new ProjectManager({
  name: "Ty",
  location: "??",
  age: 32,
  gradClassName: "CS5",
  className: "Web23",
  favSubjects: "React",
  favInstructor: "Britt"
});

//Person methods
console.log(ari.speak());
console.log(cassie.speak());
console.log(maggie.speak());
console.log(britt.speak());
console.log(christina.speak());
console.log(mychal.speak());
console.log(winnie.speak());
console.log(ty.speak());
//Student methods
console.log(ari.listsSubjects());
console.log(cassie.listsSubjects());
console.log(maggie.listsSubjects());
console.log(maggie.PRAssignment("HTML"));
console.log(cassie.sprintChallenge("Adv CSS"));

//Instructor methods
console.log(britt.demo('CSS'));
console.log(britt.grade('Cassie', 'JSIII assignment'));
console.log(christina.demo('HTML'));
console.log(christina.grade('Maggie', 'JSIV assignment'));
console.log(britt.saySpecialty());
console.log(britt.catchPhrase);
console.log(christina.catchPhrase);



//PM methods
console.log(mychal.standUp("web.23"));
console.log(winnie.standUp("web.24"));
console.log(ty.standUp("web.25"));
console.log(mychal.debugsCode("Ari","CSS Flexbox"));
console.log(winnie.debugsCode("another student","HTML syntax"));

//testing attributes
console.log(ari.listsSubjects);


