const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

const findPerson = (type, id) => school[type + 's'].find(person => person.id === id)
console.log('finding a student with id of 13')
console.log(findPerson('student',13))
console.log('finding a teacher with id of 2')
console.log(findPerson('teacher',2))

// A method called “assignStudent” that takes two
// arguments, a student’s id and a subject
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

const assignStudent = (studenId, subject) => {
    let {teachers, students} = school
    let studentObj = students.find(student => student.id === studenId)
    let teacherObj = teachers.find(teacher => teacher.subjects.find(teacherSubject => teacherSubject === subject ))
    console.log('teacher object: ',teacherObj)
    if (teacherObj.capacityLeft > 0) {
        teacherObj.capacityLeft--
        teacherObj.students.push(studentObj)
    } else console.log('Sorry, no available teachers left.')
}

assignStudent(13, 'history')
console.log(school)
assignStudent(12, 'history')
assignStudent(11, 'history')

// A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

const assignTeachersSubject = (teacherId,newSubject) => {
    let teacher = findPerson('teacher',teacherId)
    console.log('teacher: ',teacher)
    let isSubject = teacher.subjects.find(subject => subject === newSubject)
    console.log('isSubject: ',isSubject)
    if (!isSubject) teacher.subjects.push(newSubject)
}

assignTeachersSubject(1,'art')
assignTeachersSubject(1,'chemistry')
console.log(school.teachers)

