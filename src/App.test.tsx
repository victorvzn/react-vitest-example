import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'

describe('App', () => {
  test('Should multiply two numbers', () => {
    expect(3 * 3).toBe(9)
  })
})