describe('test CountAllPaarl function',function (){
it('should return the 3 registration if the are 3 number of registation ',function(){
    assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));

});

it('should return 3 if the are 4 number of registration ',function(){
    assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));


});
});

