import { get } from 'config-environment'

export const envs = {
  PORT: get( 'PORT', { type: 'port', defaultValue: 3000 } ) as number,
  PUBLIC_PATH: get( 'PUBLIC_PATH', { defaultValue: 'public' } ) as string,
  POSTGRES_URI: get( 'POSTGRES_URI', { required: true } ) as string,
}
