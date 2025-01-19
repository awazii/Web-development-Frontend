import {formatcurrency} from '../../scripts/utils/money.js'
describe('test suite:formatCurrency',()=>{
it('converts cents into dollars',()=>{
    expect(formatcurrency(2074)).toEqual('20.74');
})
it("works with 0",()=>{
    expect(formatcurrency(0)).toEqual('0.00');
})
it("rounds up to the nearest cent",()=>{
    expect(formatcurrency(1000.4)).toEqual('10.00');
})
})