import { ModelCtor, Model, Sequelize } from "sequelize";
import { Injectable, Database } from "@mayajs/core";
import { Models } from "@mayajs/sql";

@Injectable()
export class UsersServices {
  @Database<Sequelize, ModelCtor<Model<any, any>>>("sql") db: any;

  constructor() {}

  async create(body: any) {
    try {
      return this.db.models.user.create(body);
    } catch (error) {
      return error;
    }
  }

  async all() {
    try {
      return this.db.models.user.findAll();
    } catch (error) {
      return error;
    }
  }
}
