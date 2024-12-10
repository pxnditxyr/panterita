import { get } from 'config-environment'

export const envs = {
  PORT: get( 'PORT' ).asNumber({ defaultValue: 3000 }),
  PUBLIC_PATH: get( 'PUBLIC_PATH' ).asString({ defaultValue: 'public' }),
  POSTGRES_URI: get( 'POSTGRES_URI' ).isRequired().asString(),
}
