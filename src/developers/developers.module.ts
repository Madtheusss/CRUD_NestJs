import { Module } from '@nestjs/common'; // Módulo principal do NestJS
import { DevelopersService } from './developers.service'; // Serviço de desenvolvedores
import { DevelopersController } from './developers.controller'; // Controlador de desenvolvedores
import { TypeOrmModule } from '@nestjs/typeorm'; // Módulo TypeORM para conexão com o banco de dados
import { Developer } from './entities/developer.entity'; // Entidade de desenvolvedor

// Decorador @Module que indica que esta é uma classe de módulo
@Module({
  imports: [
    // Configuração do TypeORM para a entidade Developer
    TypeOrmModule.forFeature([Developer])
  ],
  controllers: [DevelopersController], // Controladores deste módulo
  providers: [DevelopersService], // Provedores de serviço deste módulo
})
// Exportação da classe DevelopersModule
export class DevelopersModule { }