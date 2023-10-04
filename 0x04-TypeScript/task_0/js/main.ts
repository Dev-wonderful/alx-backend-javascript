interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const student1: Student = {
    firstName: 'Ade',
    lastName: 'Yinka',
    age: 15,
    location: 'Ekiti'
};

const student2: Student = {
    firstName: 'Tola',
    lastName: 'Richmond',
    age: 15,
    location: 'Edo'
};

const studentsList: Array<Student> = [student1, student2]
for (let student of studentsList) {
    const row = `|  ${student.firstName}    |  ${student.location}  |`;
    console.log(row);
}
