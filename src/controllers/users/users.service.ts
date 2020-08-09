import { ModelCtor, Model, Sequelize } from "sequelize";
import { Injectable, Database } from "@mayajs/core";
import { Models } from "@mayajs/sql";

@Injectable()
export class UsersServices {
  @Models("user") model!: ModelCtor<Model<any, any>>;

  constructor() {}

  async create(body: any) {
    try {
      return this.model.create(body);
    } catch (error) {
      return error;
    }
  }
}
