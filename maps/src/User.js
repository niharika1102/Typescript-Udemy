import { faker } from "@faker-js/faker";
export class User {
    name;
    location;
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    }
}
