import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { UsersServices } from "./users.service";

@Controller({
  model: "./users.model",
  route: "/users",
})
export class UsersController {
  constructor(private services: UsersServices) {}

  @Post({ path: "/", middlewares: [] })
  async addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.send(await this.services.create(req.body));
  }

  @Get({ path: "/", middlewares: [] })
  async allUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.send(await this.services.all());
  }
}
