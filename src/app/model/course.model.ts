export class Course {
    id: number;
    name: string;
    instructor: number;
    verified: number;
    shown: number;
    dateAdded: string;
    lastUpdated: string;

    instructorName?:string;
    formattedDateAdded?:string;
    registered?:boolean;
    completed?:boolean;
    isInstructor?:boolean;
    marks?:number;

    imageUrl?:string;

    progress?: number;
}