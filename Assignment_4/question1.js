
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    calculateGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) {
            return "A";
        }
        else if (avg >= 60) {
            return "B";
        }
        else if (avg >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Creating objects for 3 students

let s1 = new Student("Rahul", [80, 90, 85]);
let s2 = new Student("Priya", [65, 70, 75]);
let s3 = new Student("Aman", [30, 35, 40]);

console.log(s1.name, s1.calculateAverage(), s1.calculateGrade());
console.log(s2.name, s2.calculateAverage(), s2.calculateGrade());
console.log(s3.name, s3.calculateAverage(), s3.calculateGrade());
