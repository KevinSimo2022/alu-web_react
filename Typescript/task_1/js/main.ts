// Define the `Teacher` interface to represent a teacher's properties
interface Teacher {
  readonly firstName: string; // First name of the teacher (read-only)
  readonly lastName: string; // Last name of the teacher (read-only)
  fullTimeEmployee: boolean; // Whether the teacher is a full-time employee
  yearsOfExperience?: number; // Optional: Number of years of experience
  location: string; // Location of the teacher
  [propName: string]: any; // Additional dynamic properties of any type
}

// Define the `Directors` interface, which extends the `Teacher` interface
interface Directors extends Teacher {
  numberofReports: number; // Directors have an additional property for the number of reports
}

// Define the function type for `printTeacher`
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function takes firstName and lastName and returns a string
}

// Implement the `printTeacher` function based on the `printTeacherFunction` type
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}.${lastName} `; // Format: First initial + last name
};

// Define a constructor interface for creating `StudentClass` objects
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface; // Constructor signature
}

// Define the `StudentClassInterface` to represent a student and their methods
interface StudentClassInterface {
  workOnHomework(): string; // Method to indicate the student is working on homework
  displayName(): string; // Method to display the student's first name
}

// Implement the `StudentClass` class that adheres to the `StudentClassInterface`
class StudentClass implements StudentClassInterface {
  firstName: string; // First name of the student
  lastName: string; // Last name of the student

  // Constructor to initialize the student's first and last names
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Implementation of the `workOnHomework` method
  workOnHomework(): string {
    return "Currently working"; // Indicates the student is working on homework
  }

  // Implementation of the `displayName` method
  displayName(): string {
    return this.firstName; // Returns the student's first name
  }
}
