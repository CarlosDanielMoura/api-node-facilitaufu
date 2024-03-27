import { Request, Response } from "express";
import { horarioOnibusService } from "../services/HorarioOnibusService";

class HorarioOnibusController {
  async get_horario_onibus(request: Request, response: Response) {
    return horarioOnibusService.get_horario_onibus(request, response);
  }
}

export const horarioOnibusController = new HorarioOnibusController();
