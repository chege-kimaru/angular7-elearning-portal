import { User } from './user.model';

export class InstructorRequest {
    id: number;
    topic: string;
    details: string;
    received: number;
    accepted: number;
    dateAdded: string;
    lastUpdated: Date;

    user?:User;
    dateAddedFormatted?:string;
}