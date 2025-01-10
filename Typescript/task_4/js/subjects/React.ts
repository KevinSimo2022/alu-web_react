/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export class React extends Subject {
        // Method to return requirements for the React subject
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        // Method to return the availability of a teacher for React
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact == 0) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}
