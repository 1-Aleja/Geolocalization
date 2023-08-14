
export interface Country {
    id: number,
    name: string
    departments:Department[],
}
export interface Department {
    id: number;
    name: string;
    cities:City[]
}
export interface City {
    id: number;
    name: string;
    sectors:Sector[]
}
export interface Sector {
    id: number;
    city_id: number;
    name: string;
}
export interface DetailCountry{
    id: number,
    name: string
}