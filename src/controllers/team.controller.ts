import { Request, Response } from "express";
import { Team } from "../models";
import { StatusCodes } from "http-status-codes";


const getAll = async (req: Request, res: Response): Promise<Response> => {
    const teams = await Team.query()
    return res.status(StatusCodes.OK).json(teams)
}

export const TeamController = {
    getAll
}