import request from "supertest";
import { app } from "../server";

describe("Test my service class", () => {
  it("should return a list of Atividade Academica", async () => {
    const res = await request(app).get("/atividade_academicas");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });

  it("should return a list of curso", async () => {
    const res = await request(app).get("/cursos");

    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });

  it("should return a list of edital", async () => {
    const res = await request(app).get("/edital");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });

  it("should return a list of disciplina", async () => {
    const res = await request(app).get("/disciplina");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });
  it("should return a list of Horário Onibus", async () => {
    const res = await request(app).get("/horario-onibus");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });
  it("should return a list of Horário", async () => {
    const res = await request(app).get("/horario");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });
  it("should return a list of Professor", async () => {
    const res = await request(app).get("/professor");
    expect(res.type).toBe("application/json");
    expect(res.status).toEqual(200);
  });
});
