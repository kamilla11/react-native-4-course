export class CharacterModel {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationModel;
    location: LocationModel;
    image: string;
    episode: string[];
    url: string;
    created: string;

    constructor(id: number,
                name: string,
                status: string,
                species: string,
                type: string,
                gender: string,
                origin: LocationModel,
                location: LocationModel,
                image: string,
                episode: string[],
                url: string,
                created: string,) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.episode = episode;
        this.url = url;
        this.created = created;
    }
}

class LocationModel {
    name: string;
    url: string;

    constructor(name: string,
                url: string) {
        this.name = name
        this.url = url;
    }
}
