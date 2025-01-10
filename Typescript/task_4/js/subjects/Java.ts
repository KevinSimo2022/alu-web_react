/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export class Java extends Subject {
        // Method to return requirements for the Java subject
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        // Method to return the availability of a teacher for Java
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava == 0) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}
