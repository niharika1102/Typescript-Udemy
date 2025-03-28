import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user: User = new User();
console.log(user);

const company: Company = new Company();
console.log(company);

const userMap = new CustomMap("map");
userMap.addUserMarker(user);
