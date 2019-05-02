export class Quiz {
    id: number;
    title: string;
    topic: number;
    shown: number;
    must: boolean;
    dateAdded: Date;
    lastUpdated: Date;

    questionsCount?:number;
    marks?:number;
    completed?:boolean;
}