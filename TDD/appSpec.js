describe('I want to test', function(){

    it('Should have an add function',function(){
        expect(add(1,2)).toBe(3);
    })
    it('Should throw an error',function(){
        expect(add(function(){},function(){})).toBe('Pass numbers only');
    })
})