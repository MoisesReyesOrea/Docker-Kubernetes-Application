export interface ItemModel {
    _id?: string | number;
    name: string;
    seasons?: number;
    episodes?: number;
    tournament?: string;
    date?: string;
    year?: number;
    director?: string;
    genre?: string;
    type?: string;
    description: string;
    img?: string;
    favorite?: true | false;
    viewed?: true | false;
    hide?: true | false;
}