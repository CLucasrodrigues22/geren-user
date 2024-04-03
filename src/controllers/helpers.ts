import { HttpResponse, HttpStatusCode } from "./protocols";

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body,
});

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: message,
  };
};
// Chamando a função serverError para obter o objeto HttpResponse

export const serverError = (): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.SERVER_ERROR,
    body: "Something went wrong",
  };
};

// Exemplo de uso da função serverError para pegar a descrição do erro
const response = serverError();
const errorMessage = response;

console.log(errorMessage);