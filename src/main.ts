import { envs } from './config'
import { AppRoutes, Server } from './presentation'

( async () => {
  main()
} )()

function main () {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  })
}
