import sum from '../../utils/sum'

describe('testsum', () => {
  test('function should return sum of two elements', () => {
    expect(sum(2, 3)).toEqual(5)
  })
})
