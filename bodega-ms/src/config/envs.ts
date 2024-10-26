import * as joi from "joi"
import 'dotenv/config'

interface IEnvs {
  PORT: string
  NATS_SERVERS: string[],
  NATS_SERVICE: string
}

const envSchema = joi.object({
  PORT: joi.number().required(),
  NATS_SERVERS: joi.array().required(),
  NATS_SERVICE: joi.string().required()
}).unknown(true)


const { error, value} = envSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(',')
})

if (error) {
  throw new Error(error.message);
}

const envsValidate: IEnvs = value;

export default {
  PORT: envsValidate.PORT,
  NATS_SERVERS: envsValidate.NATS_SERVERS,
  NATS_SERVICE: envsValidate.NATS_SERVICE
}
