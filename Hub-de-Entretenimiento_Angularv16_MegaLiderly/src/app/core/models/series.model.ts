export interface SeriesModel {
    _id: string | number;
    name: string;
    seasons: number;
    episodes: number;
    year: number;
    director: string;
    genre: string;
    type: string;
    description: string;
    img: string;
}