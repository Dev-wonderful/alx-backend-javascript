interface Teacher {
    firstName: string;
    fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    [key: string]: any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3)
