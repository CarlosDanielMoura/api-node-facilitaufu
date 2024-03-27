import { horarioService } from "../services/HorarioService";
import { Request, Response } from "express";

class HorarioController {
  async get_horario(request: Request, response: Response) {
    return horarioService.get_all_horario(request, response);
  }
}

export const horarioController = new HorarioController();
