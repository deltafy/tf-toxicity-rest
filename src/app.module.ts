import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import { ClassifierModule } from './classifier/classifier.module'

@Module({
    imports: [
        ClassifierModule,
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                PORT: Joi.number().default(3000)
            })
        })
    ],
    controllers: [],
    providers: []
})

export class AppModule {}