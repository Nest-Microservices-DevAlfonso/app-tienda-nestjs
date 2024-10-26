import * as joi from "joi"
import 'dotenv/config'
import { InternalServerErrorException } from "@nestjs/common"

interface IEnvs {
  PORT: string
}

const envSchema = joi.object({
  PORT: joi.number().required()
}).unknown(true)


const { error, value} = envSchema.validate(process.env)

if (error) {
  throw new InternalServerErrorException(error.message);
}

const envsValidate: IEnvs = value;

export default {
  PORT: envsValidate.PORT
}
