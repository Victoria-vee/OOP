// student class
  class student {
  // Static property - shared across all Student instances
  static totalStudents = 0;
  static maxCredit = 20;
  
  constructor(studentId, name) {
    this.studentId = studentId;
    this.name = name;
    this.maxCredit = maxCredit;
    // Static property update - increment total students
    Student.totalStudents++;
    // Default currentCredit for a new student is 0
    this.currentCredit = 0;
  }

  // Instance methods - belong to a specific student
  static enrollCourse() {
    if (this.currentCredit + course.credits <= this.maxCredit) {
      console.log(`${this.name} enrolled in ${course.courseCode}: ${course.CourseTitle}.`);
      this.currentCredit += course.credits;
      course.incrementEnrollment(); // Update course enrollment count
    } else {
      console.log(`Enrollment failed. ${this.name} would exceed max credits.`);
    }
  }

  static dropCourse() {
    if (this.currentCredit - course.credits >= 0) {
      console.log(`Student ${this.name} dropping ${course.courseTitle}.`);
      this.currentCredit -= course.credits;
      course.decrementEnrollment(); // Update course enrollment count
    } else {
      console.log(`Drop failed.  ${this.name} cannot have negative credits.`);
    }
  }
}

//Course class

class course {
  constructor(courseCode, courseTitle, credits) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.credits = credits;
    // Instance property to track current number of students enrolled in this specific course
    this.enrolledCount = 0; 
  }

  // Instance method - get details of this course
  getDetails() {
    console.log(`
      Code: ${this.courseCode}
      Title: ${this.courseTitle}
      Credits: ${this.credits}
    `);
  }

  // Instance method - get number of students currently enrolled in this course
  studentsEnrolled() {
    console.log(`Number of students enrolled in ${this.courseTitle}: ${this.enrolledCount}`);
  }

  // Helper instance methods to update enrollment, intended for use by the Student class
  incrementEnrollment() {
    this.enrolledCount++;
  }

  decrementEnrollment() {
    if (this.enrolledCount > 0) {
      this.enrolledCount--;
    }
  }
}

// Example Usage:

const course1 = new Course(101, "Intro to Computer Science", 4);
const course2 = new Course(102, "Data Structures and Algorithms", 4);
const course3 = new Course(201, "Advanced Topics in Database Systems", 4);

const student1 = new Student(1001, "Alice");
const student2 = new Student(1002, "Bob"); 

console.log(`Total Students: ${Student.totalStudents}`); // 2

student1.enrollCourse(course1);
student1.enrollCourse(course2);
student1.enrollCourse(course3); // This enrollment should fail

student2.enrollCourse(course2);

course1.getDetails();
course1.studentsEnrolled(); // 1

course2.getDetails();
course2.studentsEnrolled(); // 2

course3.getDetails();
course3.studentsEnrolled(); // 0

student2.dropCourse(course2);
course2.studentsEnrolled(); // 1
