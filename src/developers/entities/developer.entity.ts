// Importando os decoradores necessários das bibliotecas 'class-validator' e 'typeorm'
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm'; // Decoradores do TypeORM para mapeamento objeto-relacional
const { nanoid } = require('nanoid'); // Importando a função 'nanoid' para gerar IDs únicos

// Decorador @Entity que indica que esta classe é uma entidade do banco de dados
// O argumento 'developers' é o nome da tabela no banco de dados
@Entity('developers')
export class Developer {
    // Decorador @PrimaryColumn que indica que esta propriedade é uma coluna primária na tabela do banco de dados
    @PrimaryColumn()
    id: string;

    // Decorador @Column que indica que esta propriedade é uma coluna na tabela do banco de dados
    @Column()
    name: string;

    // Decorador @Column que indica que esta propriedade é uma coluna na tabela do banco de dados
    @Column()
    email: string;

    // Decorador @Column que indica que esta propriedade é uma coluna na tabela do banco de dados
    @Column()
    dateOfBirth: string;

    // Decorador @BeforeInsert que indica que esta função deve ser executada antes de inserir um novo registro no banco de dados
    @BeforeInsert()
    generateId() {
        // Gera um ID único para o novo desenvolvedor
        this.id = `dev_${nanoid()}`;
    }
}