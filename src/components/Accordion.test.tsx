import { render, screen } from '@testing-library/react';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  test('render title', () => {
    render(<Accordion title='G11'><p>Accordion content</p></Accordion>)

    expect(screen.getByText('G11')).toBeDefined()
  })
})