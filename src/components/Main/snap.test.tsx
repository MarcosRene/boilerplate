import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    const title = screen.getByRole('heading', { name: /react avançado/i })
    const description = screen.getByRole('heading', {
      name: /typescript, reactJS, nextJS e styled components/i
    })

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'var(--bg-color)'
    })
  })
})
