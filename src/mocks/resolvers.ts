import { RestRequest, ResponseComposition, RestContext } from 'msw'

export const LOGGED_USER_SUCCESS = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json({ id: 10, name: 'John Snow' }))
}

export const IN_CHAT_USERS_SUCCESS = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json([
      { id: 10, name: 'John Snow' },
      { id: 20, name: 'Aria Stark' },
      { id: 30, name: 'Tiryon Lenyster' },
    ])
  )
}

export const ADD_IN_CHAT_USERS_SUCCESS = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(201))
}

export const IN_CHAT_MESSAGE_SUCCESS = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        from: { id: 10, name: 'John Snow' },
        text: 'This is a message from user with id 10 test',
      },
      {
        id: 2,
        from: { id: 10, name: 'John Snow' },
        text: 'This is a message from user with id 10',
      },
      {
        id: 3,
        from: { id: 20, name: 'Aria Stark' },
        text: 'This is a message from user with id 20',
      },
      {
        id: 4,
        from: { id: 30, name: 'Tiryon Lenyster' },
        text: 'This is a message from user with id 30',
      },
      {
        id: 5,
        from: { id: 20, name: 'Aria Stark' },
        text: 'This is a message from user with id 20',
      },
      {
        id: 6,
        from: { id: 20, name: 'Aria Stark' },
        text: 'This is a message from user with id 20',
      },
    ])
  )
}

export const ADD_IN_CHAT_MESSAGE_SUCCESS = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(201))
}
