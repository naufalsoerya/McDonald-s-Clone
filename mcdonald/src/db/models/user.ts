import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from 'zod';

type Users = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

const UserValidation = z.object({
  username: z.string({
      required_error: "Username cant be empty"
  }),
  email: z.string({
      required_error: "Email cant be empty"
  }).email(),
  password: z.string({
      required_error: "Password cant be empty"
  })
})

export default class User {
  static userCollection() {
    return db.collection<Users>("users");
  }
}
