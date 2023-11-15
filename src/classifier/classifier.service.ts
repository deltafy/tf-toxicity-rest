import { Injectable, OnModuleInit, Logger, BadRequestException } from '@nestjs/common'
import { ToxicityClassifier } from '@tensorflow-models/toxicity'

@Injectable()
export class ClassifierService implements OnModuleInit {
    private model: ToxicityClassifier
    private threshold: number = 0.85

    constructor() {}

    async onModuleInit(): Promise<void> {
        this.model = new ToxicityClassifier(this.threshold)

        await this.model.load()
    }

    async validate(text: string | string[]) {
        try {
            if (typeof(text) !== 'string' && !Array.isArray(text)) {
                throw new BadRequestException("Input must either be a string or an array of strings.")
            }

            if (Array.isArray(text) && !text.every(t => typeof(t) === 'string')) {
                throw new BadRequestException("Input is not a full string array")
            }

            const predictions = await this.model.classify(text)

            return {
                predictions
            }
        } catch (error) {
            return error
        }
    }

}