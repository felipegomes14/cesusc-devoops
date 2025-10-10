const app = require('../src/app.js')
test('soma 1 + 2 deve ser igual a 3', () => {
expect(app(1, 2)).toBe(3)
})