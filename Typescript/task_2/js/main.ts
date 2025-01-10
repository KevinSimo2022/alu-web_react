// Define the interface for a Director, specifying the methods they must implement
interface DirectorInterface {
  workFromHome(): string; // Method for working from home
  getCoffeeBreak(): string; // Method for getting a coffee break
  workDirectorTasks(): string; // Method for performing director-specific tasks
}

// Define the interface for a Teacher, specifying the methods they must implement
interface TeacherInterface {
  workFromHome(): string; // Method for working from home
  getCoffeeBreak(): string; // Method for getting a coffee break
  workTeacherTasks(): string; // Method for performing teacher-specific tasks
}

// Define the Director class implementing the DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'; // Directors can work from home
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break'; // Directors can take coffee breaks
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'; // Director-specific work
  }
}

// Define the Teacher class implementing the TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'; // Teachers cannot work from home
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break'; // Teachers cannot take breaks
  }

  workTeacherTasks(): string {
    return 'Getting to work'; // Teacher-specific work
  }
}

// Function to create an employee (either a Director or a Teacher) based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    // If the salary is a number and less than 500, return a Teacher instance
    return new Teacher();
  } else {
    // Otherwise, return a Director instance
    return new Director();
  }
}

// Type guard function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  // Check if the employee has the workDirectorTasks method (unique to Director)
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute the work of the employee based on their role
function excuteWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    // If the employee is a Director, execute director-specific tasks
    return employee.workDirectorTasks();
  } else {
    // Otherwise, execute teacher-specific tasks
    return employee.workTeacherTasks();
  }
}
