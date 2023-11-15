import { Module } from '@nestjs/common'
import { ClassifierController } from './classifier.controller'
import { ClassifierService } from './classifier.service'

@Module({
    imports: [],
    providers: [ClassifierService],
    controllers: [ClassifierController],
    exports: [ClassifierService]
})

export class ClassifierModule {}