class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log(`Оценка ${mark} по предмету ${subject} не добавлена: должна быть от 2 до 5`);
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); 

console.log(student.getAverageBySubject("физика")); 
console.log(student.getAverageBySubject("биология")); 
console.log(student.getAverage()); 
console.log(student.marks); 

const student2 = new Student("Анна Петрова");
console.log(student2.getAverage()); 

student2.addMark(4, "математика");
student2.addMark(5, "математика");
student2.addMark(3, "математика");
student2.addMark(5, "литература");
student2.addMark(4, "литература");
student2.addMark(1, "литература"); 

console.log(student2.getAverageBySubject("математика")); 
console.log(student2.getAverageBySubject("литература")); 
console.log(student2.getAverageBySubject("история")); 
console.log(student2.getAverage()); 