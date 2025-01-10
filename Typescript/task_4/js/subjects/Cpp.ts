/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export class Cpp extends Subject {
        // Method to return requirements for the C++ subject
        getRequirements(): string {
            return "Here is the list of requirements for Java"; // Seems to mention Java, possibly meant for C++
        }

        // Method to return the availability of a teacher for C++
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC == 0) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}

