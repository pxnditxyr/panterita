import express, { type Router } from 'express'

interface IOptions {
  port:         number
  routes:       Router
  public_path?: string
}

export class Server {
  private app = express()
  private readonly port : number
  private readonly publicPath : string
  private readonly routes : Router

  constructor( options : IOptions ) {
    const { port, public_path = 'public', routes } = options
    this.port = port
    this.publicPath = public_path
    this.routes = routes
  }

  async start () {

    this.app.use( express.static( this.publicPath ) )

    this.app.get( '/api/todos' )

    this.app.use( this.routes )

    this.app.listen( this.port, () => {
      console.log( `Server is running on port ${ this.port }` )
    } )
  }
}
