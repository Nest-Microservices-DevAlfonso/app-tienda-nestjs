import * as joi from "joi"
import 'dotenv/config'

interface IEnvs {
  PORT: string
}

const envSchema = joi.object({
  PORT: joi.number().required()
}).unknown(true)


const { error, value} = envSchema.validate(process.env)

if (error) {
  throw new Error(error.message);
}

const envsValidate: IEnvs = value;

export default {
  PORT: envsValidate.PORT
}
