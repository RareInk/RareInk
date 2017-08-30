import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
}
