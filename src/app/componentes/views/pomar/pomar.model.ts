import { AgronomoModel } from "../agronomo/agronomo.model";
import { ProdutorModel } from "../produtor/produtor.model";

export interface PomarModel {
    IDPomar?: number;
    nome: string;
    logradouro: string;
    bairro_localidade: string;
    cidade: string;
    estado: string;
    cep: string;
    Produtor?:ProdutorModel;
    RespTecnico?: AgronomoModel;
}