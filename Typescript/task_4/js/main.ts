/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Define a teacher object with experience in various subjects
export const cTeacher: Subjects.Teacher = {
    firstName: 'Mark',
    lastName: 'Goo',
    experienceTeachingC: 10,
    experienceTeachingReact: 5,
    experienceTeachingJava: 0,
};

// Create and use a C++ subject instance
export const cpp = new Subjects.Cpp(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Create and use a Java subject instance
export const java = new Subjects.Java(cTeacher);
console.log('java+++');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Create and use a React subject instance
export const react = new Subjects.React(cTeacher);
console.log('react+++');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
