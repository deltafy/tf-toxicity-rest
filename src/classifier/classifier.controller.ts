import { Controller, Post, Body } from '@nestjs/common'
import { ClassifierService } from './classifier.service'

interface InputPayload {
    input: string | string[]
}

@Controller('classifier')
export class ClassifierController {

    constructor(
        private classifierService: ClassifierService
    ) {}

    @Post()
    async validate(@Body() body: InputPayload) {
        return await this.classifierService.validate(body['input'])
    }

}