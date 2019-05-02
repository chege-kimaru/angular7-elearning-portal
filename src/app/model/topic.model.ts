export class Topic {
    id: number;
    topicNo: number;
    title: string;
    content: string;
    course: number;
    dateAdded: Date;
    lastUpdated: Date;

    completed?:boolean;
    requireQuiz?:boolean;
}