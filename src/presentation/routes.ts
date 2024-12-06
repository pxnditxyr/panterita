import { Router } from 'express'

export class AppRoutes {
  static get routes () : Router {

    const router = Router()

    router.get( '/api/example', ( request, response ) => {
      response.json([])
    } )

    return router

  }
}
