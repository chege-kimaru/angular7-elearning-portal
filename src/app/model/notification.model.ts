export class Notification {
    id: number;
    user: string;
    topic: number;
    details: number;
    viewed: boolean;
    dateAdded: string;
    lastUpdated: Date;

    dateAddedFormatted: string;
}