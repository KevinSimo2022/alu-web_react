/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        protected teacher: Subjects.Teacher;

        // Constructor to initialize the teacher for the subject
        constructor(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }

        // Method to update the teacher assigned to the subject
        setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }
    }
}
