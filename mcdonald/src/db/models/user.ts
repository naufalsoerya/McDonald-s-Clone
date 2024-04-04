import { User } from "@/types";
import { db } from "../config";
import { z } from "zod";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

interface Login {
  email: string;
  password: string;
}

interface newUser {
  name: string;
  username: string; // validation: required, unique
  email: string; // validation: required, unique, email format
  password: string; // validation: required, length min 5
}

const UserValidation = z.object({
  username: z.string({
    required_error: "Username cant be empty",
  }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email(),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5),
});

export default class UserModel {
  static userCollection() {
    return db.collection<User>("users");
  }

  static async getUserByEmail(email: string) {
    return (await this.userCollection().findOne({ email })) as User | null;
  }

  static async create(newUser: newUser) {
    const validation = UserValidation.safeParse(newUser);

    if (!validation.success) {
      const errors = validation.error;
      throw errors;
    }

    const user = {
      ...newUser,
      password: bcryptjs.hashSync(newUser.password),
    };

    const [validateUser] = await this.userCollection()
      .find({
        $or: [
          {
            username: user.username,
          },
          {
            email: user.email,
          },
        ],
      })
      .toArray();

    if (validateUser) throw new Error("Email/Username already registered");

    const data = await this.userCollection().insertOne(user);
    return data;
  }

  static async getUserById(id: string) {
    const _id = new ObjectId(id);

    const data = (await this.userCollection().findOne({ _id })) as User | null;

    if (!data) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        { status: 404 }
      );
    }
    return data;
  }

  static async findAll() {
    return (await this.userCollection().find({}).toArray()) as User[];
  }
}
