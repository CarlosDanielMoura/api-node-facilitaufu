import { AxiosResponse } from "axios";
import api from "../api";
import { Request, Response } from "express";
interface IHorario {
  id_horario: number;
  cod_disciplina: number;
  classificacao: string;
  hora_aula: string;
  created_at: string;
}

class HorarioService {
  async get_all_horario(resquest: Request, response: Response) {
    try {
      const horario_response: AxiosResponse<{ horario: IHorario[] }> =
        await api.get("/horario");

      const horario = horario_response.data.horario;
      if (horario.length === 0) {
        return response.status(404).json({
          message: "Nenhum Horario encontrado!",
        });
      }
      return response.status(200).json(horario_response.data);
    } catch (error) {
      response.status(500).json({
        message: "Falha no servidor, não foi possível encontrar Horarios!",
      });
    }
  }
}
export const horarioService = new HorarioService();
