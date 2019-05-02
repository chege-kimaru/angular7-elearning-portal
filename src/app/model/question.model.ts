import { Choice } from './choice.model';

export class Question {
    id: number;
    content: string;
    quiz: number;
    dateAdded: Date;
    lastUpdated: Date;

    choices: Choice[];
    userCorrect: boolean;
    userSelected: number;
}