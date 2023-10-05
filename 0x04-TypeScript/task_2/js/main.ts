
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    [key: string]: any
}
interface Directors extends Teacher{
    numberOfReports: number;
}
const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17
};
console.log(director1)
