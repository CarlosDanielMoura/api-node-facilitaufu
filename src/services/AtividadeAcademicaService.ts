import { AxiosResponse } from "axios";
import api from "../api";
import { Request, Response } from "express";

interface IAtividadeAcademica {
  id_atividade_academica: number;
  desc_atividade: string;
  semestre_vigente: string;
  data_inicio: string;
  data_fim: string;
  created_at: string;
}

class AtividadeAcademicaService {
  async get_all_atividade_academica(req: Request, res: Response) {
    try {
      const atividade_academica_response: AxiosResponse<{
        atividades_academicas: IAtividadeAcademica[];
      }> = await api.get("/atividade_academicas");

      const atividades_academicas =
        atividade_academica_response.data.atividades_academicas;

      if (atividades_academicas.length === 0) {
        return res
          .status(404)
          .json({ message: "Atividade Academica não encontrada!" });
      }

      return res.status(200).json(atividades_academicas);
    } catch (error) {
      res.status(500).json({
        message: "Falha no servidor! Tente novamente mais tarde!",
      });
    }
  }
}

export const atividadeAcademicaService = new AtividadeAcademicaService();
