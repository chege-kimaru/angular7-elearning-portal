import { Course } from './course.model';

export class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    idNumber: string;
    email: string;
    phoneNumber: string;
    address: string;
    addressCode: string;
    city: string;
    role: number;
    dateAdded: Date;
    lastUpdated: Date;

    token?: string;
    roleName?:string;
    fullName?:string;
    fullAddress?:string;
    imageUrl?:string;

    courses?: Course[];

    constructor() { }

    public getRoleName = (role: number): string => {
        switch (role) {
            case 1:
                return 'Admin';
            case 2:
                return 'Instructor';
            case 3:
                return 'Normal User';
        }
    }
    public getName = (firstName: string, middleName: string, lastName: string): string => {
        return `${firstName} ${middleName} ${lastName}`;
    }

    public getFullAddress = (address: string, addressCode:string, city: string) :string => {
        return `P.O. Box ${address} - ${addressCode} ${city}`;
    }
}

