import { Request, Response } from "express";
import api from "../api";
import { AxiosResponse } from "axios";

interface IHorarioOnibus {
  horario_partida: string;
  id: number;
  tipo_onibus: string;
  created_at: string;
  destino: string;
  ponto_saida: string;
}

class HorarioOnibusService {
  async get_horario_onibus(request: Request, response: Response) {  
    try {
      const horario_onibus_response: AxiosResponse<{
        horarios_onibus: IHorarioOnibus[];
      }> = await api.get("/horario_onibus");

      const horarios_onibus = horario_onibus_response.data.horarios_onibus;
      if (horarios_onibus.length === 0) {
        return response.status(404).json({
          message: "Nenhum Horário de Ônibus encontrado!",
        });
      }
      return response.status(200).json(horario_onibus_response.data);
    } catch (error) {
      response.status(500).json({
        message:
          "Falha no servidor, não foi possível encontrar Horários de Ônibus!",
      });
    }
  }
}

export const horarioOnibusService = new HorarioOnibusService();
