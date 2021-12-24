import {User} from "../models/user.model";

export function formatUser(data: any) {
  return new User(
    data.id,
    data.firstName,
    data.lastName,
    data.lastName
  );
}
