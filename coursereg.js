// student class

class Student {
  // Static property - shared across all Student instances
  static totalStudents = 0;
  static maxCredit = 10;
  constructor(studentId, name) {
    this.studentId = studentId;
    this.name = name;
    // Static property update - increment total students
    Student.totalStudents++;
    // Default currentCredit for a new student is 0
    this.currentCredit = 0;
  }

  // Instance methods - belong to a specific student
  enrollCourse(course) {
    if (this.currentCredit + course.credits <= Student.maxCredit) {
      console.log(`Student ${this.name} enrolling in ${course.courseTitle}.`);
      this.currentCredit += course.credits;
      course.incrementEnrollment(); // Update course enrollment count
    } else {
      console.log(`Enrollment failed. Student ${this.name} would exceed max credits.`);
    }
  }

  dropCourse(course) {
    if (this.currentCredit - course.credits >= 0) {
      console.log(`Student ${this.name} dropping ${course.courseTitle}.`);
      this.currentCredit -= course.credits;
      course.decrementEnrollment(); // Update course enrollment count
    } else {
      console.log(`Drop failed. Student ${this.name} cannot have negative credits.`);
    }
  }
}

// course class

class Course {
  constructor(courseCode, courseTitle, credits) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.credits = credits;
    // Instance property to track current number of students enrolled in this specific course
    this.enrolledCount = 0; 
  }

  // Instance method - get details of this course
  getDetails() {
    console.log(`CS${this.courseCode}: ${this.courseTitle} - ${this.credits} Units`);
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
const course4 = new Course(202, "Intro to Operating Systems", 1);


const student1 = new Student(1001, "Alice");
const student2 = new Student(1002, "Bob"); 

console.log(`Total Students: ${Student.totalStudents}`);

student1.enrollCourse(course1);
student1.enrollCourse(course2);
student1.enrollCourse(course3); 

student2.enrollCourse(course1);
student2.enrollCourse(course2);
student2.enrollCourse(course4);



course1.getDetails();
course1.studentsEnrolled(); 

course2.getDetails();
course2.studentsEnrolled();

course3.getDetails();
course3.studentsEnrolled();

student2.dropCourse(course2);
course2.studentsEnrolled();
