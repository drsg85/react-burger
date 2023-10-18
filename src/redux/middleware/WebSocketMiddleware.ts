import { Middleware, MiddlewareAPI } from 'redux'

// Actions
import { TAppActions } from 'redux/actions'
import { AppDispatch, TRootState } from 'redux/store'
import { refreshTokens } from 'utils'

interface IWSActions {
  wsStart: string
  wsStop: string

  onOpen: (event: Event) => TAppActions
  onMessage: (event: MessageEvent) => TAppActions
  onError: (event: Event) => TAppActions
  onClose: (event: Event) => TAppActions
}

export const WebSocketMiddleware = (WSActions: IWSActions): Middleware =>
  ((store: MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket: WebSocket | null = null
    let wsUrl = ''

    return (next) => (action: TAppActions) => {
      const { dispatch } = store

      if (action.type === WSActions.wsStart) {
        wsUrl = (action as { payload: string }).payload

        socket = new WebSocket(wsUrl)
      }

      if (socket) {
        socket.onopen = (event) => {
          console.log('WS opened')
        }

        socket.onerror = (event) => {
          console.log('Error on WS')
        }

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data)

          if (!data.success && data.message === 'Invalid or missing token') {
            socket?.close()

            refreshTokens().then(() =>
              dispatch({
                type: action.type,
                payload: wsUrl,
              } as TAppActions),
            )
          } else {
            dispatch(WSActions.onMessage(event))
          }
        }

        socket.onclose = (event) => {
          console.log('WS closed')
        }

        if (action.type === WSActions.wsStop) {
          socket.close()
        }
      }

      next(action)
    }
  }) as Middleware
