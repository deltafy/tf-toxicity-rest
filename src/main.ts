import { NestFactory } from '@nestjs/core'
import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
	const configService = app.get(ConfigService)

	const globalPrefix = 'api'
	const port = configService.get('PORT')

	app.setGlobalPrefix(globalPrefix)
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)

	await app.listen(port)

	Logger.log(`HELL YEAH IT'S RUNNING AT http://localhost:${port}/${globalPrefix}`)
}

bootstrap()