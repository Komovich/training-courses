import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "../App";

const server = setupServer(
  rest.get('preview-courses/1', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should render title', async () => {
  render(<App />)

  expect(screen.getByText('Regular online courses')).toBeVisible()
})