import { getName } from '../lib/a'

describe('测试 getName', () => {
  test('执行 getName，返回字符串 "ok" ', () => {
    expect(getName()).toBe('ok')
  })
})
