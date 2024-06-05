import { IsDateString, IsEmail, IsString } from 'class-validator';

// Definindo a classe 'CreateDeveloperDto' que será usada para validar os dados recebidos para a criação de um desenvolvedor
export class CreateDeveloperDto {

    // Decorador que valida se o valor da propriedade 'name' é uma string
    @IsString()
    name: string;

    // Decorador que valida se o valor da propriedade 'email' é um email válido
    @IsEmail()
    email: string;

    // Decorador que valida se o valor da propriedade 'dateOfBirth' é uma data válida
    @IsDateString()
    dateOfBirth: string;

}