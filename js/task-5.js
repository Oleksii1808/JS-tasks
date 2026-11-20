const coursesData = [
  {
    title: 'JavaScript Basics',
    price: 1200,
    students: 20,
    isActive: true,
  },
  {
    title: 'HTML & CSS',
    price: 900,
    students: 25,
    isActive: true,
  },
  {
    title: 'React Start',
    price: 1800,
    students: 0,
    isActive: false,
  },
];

// ЗАДАЧА 1


const getActiveCourses = (courses) => courses.filter((course) => course.isActive === true);


    console.log(getActiveCourses(coursesData));
// [
//   {
//     title: 'JavaScript Basics',
//     price: 1200,
//     students: 20,
//     isActive: true
//   },
//   {
//     title: 'HTML & CSS',
//     price: 900,
//     students: 25,
//     isActive: true
//   }
// ]


// ЗАДАЧА 2

function createCoursesOverview(courses) {
    const activeCoursesArr = getActiveCourses(courses);
    const arrOfActiveCourses = activeCoursesArr.map((activeCourse) => `${activeCourse.title} — ${activeCourse.price} грн`);

    const newObj = {
        titles: arrOfActiveCourses,
        totalStudents: activeCoursesArr.reduce(((acc, activeCoursesArr) => acc + activeCoursesArr.students), 0),
        allHaveStudents: activeCoursesArr.every((course) => course.students > 0),
        hasFreeCourse: activeCoursesArr.some((course) => course.price === 0)
    };
 
    return newObj;
}

console.log(createCoursesOverview(coursesData));
// {
//   titles: ['HTML & CSS — 900 грн', 'JavaScript Basics — 1200 грн'],
//   totalStudents: 45,
//   allHaveStudents: true,
//   hasFreeCourse: false
// }


// ЗАДАЧА 3

class Course {
    #students
    constructor(params) {
        this.title = params.title;
        this.price = params.price;
        this.#students = params.students;
    }

    enrollStudent() {
        this.#students += 1; 
    }

    getStudentsCount() {
        return this.#students;
    }

    getInfo() {
    return `${this.title}: ${this.#students} студентів, ${this.price} грн`
    }
}

const course = new Course({
  title: 'JavaScript Basics',
  price: 1200,
  students: 20,
});

course.enrollStudent();

console.log(course.getStudentsCount()); // 21

console.log(course.getInfo());
// JavaScript Basics: 21 студентів, 1200 грн


// ЗАДАЧА 4

class CourseCatalog {
    #courses
    constructor(courses) {
        const activeCourses = getActiveCourses(courses);
        this.#courses = activeCourses.map((activeCourse) => new Course(activeCourse));
    }

    addCourse(course) {
        this.#courses.push(course)
    }

    findCourse(title) {
        const foundCourse = this.#courses.find((course) => {
            return course.title === title
        });
        return foundCourse ?? null
    }

    getTotalPotentialIncome() {
        const totalIncome = this.#courses.reduce((acc, course) => acc + (course.price * course.getStudentsCount()), 0);
        return totalIncome;
    }

}


const catalog = new CourseCatalog(coursesData);

console.log(catalog.findCourse('HTML & CSS').getInfo());
// HTML & CSS: 25 студентів, 900 грн

console.log(catalog.getTotalPotentialIncome()); // 46500

// ЗАДАЧА 5

class PremiumCourse extends Course{
    constructor(courses) {
        super(courses);
        this.mentor = courses.mentor;
    }

    getInfo() {
    return `${super.getInfo()}. Ментор: ${this.mentor}`
    }

}

const premiumCourse = new PremiumCourse({
  title: 'Advanced JavaScript',
  price: 2500,
  students: 10,
  mentor: 'Ірина',
});

catalog.addCourse(premiumCourse);

console.log(catalog.findCourse('Advanced JavaScript').getInfo());
// Advanced JavaScript: 10 студентів, 2500 грн. Ментор: Ірина

console.log(catalog.getTotalPotentialIncome()); // 71500

