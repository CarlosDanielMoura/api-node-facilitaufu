import { AxiosResponse } from "axios";
import api from "../api";
import { Request, Response } from "express";

interface IEdital {
  org_resposavel: string;
  tipo: string;
  cod_edital: string;
  link: string;
  titulo: string;
  dt_publicacao: string;
  created_at: string;
}

class EditalService {
  async getEdital(request: Request, response: Response) {
    try {
      const edital_response: AxiosResponse<{ edital: IEdital[] }> =
        await api.get("/edital");

      const edital = edital_response.data.edital;
      if (edital.length === 0) {
        return response.status(404).json({
          message: "Nenhum Edital encontrado!",
        });
      }
      return response.status(200).json(edital_response.data);
    } catch (error) {
      response.status(500).json({
        message: "Falha no servidor, não foi possível encontrar Editais!",
      });
    }
  }
}

export const editalServive = new EditalService();
