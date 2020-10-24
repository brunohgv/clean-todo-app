import { Router } from "express";

export interface IRouter {
    getRoutes() : Router
}