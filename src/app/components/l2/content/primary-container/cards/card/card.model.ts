export class Card {
    cardTitle: string;
    cardContent: string;
    data: {};
    type: string;
    insertionCounter: number;
    timestamp: number;
    cardStyle: string;

    constructor(cardTitle: string, cardContent: string, data: {}, type: string, timestamp: number, cardStyle: string) {
        this.cardTitle = cardTitle;
        this.cardContent = cardContent;
        this.data = data;
        this.type = type;
        this.timestamp = timestamp;
        this.cardStyle = cardStyle;
    }
}