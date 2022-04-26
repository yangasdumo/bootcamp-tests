describe('test fromWhere function', function(){
it ('should return belleville if registration is CY',function(){
    assert.equal(fromWhere('CY'), 'Bellville');
});
it ('should return Capetwon if registration is CA',function(){
    assert.equal(fromWhere('CA'), 'Cape Town');
});
it ('should return Paarl if registration is CJ',function(){
    assert.equal(fromWhere('CJ'), 'Paarl');
});
});
