describe('test CountRegNumbers function',function(){
    it('should return the number of regstration CY 523519',function(){
      var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
      assert.equal(regCount, 3);
      
  });
  it('should return the number of regstration CY 523519',function(){
    var regCount = countRegNumber('CA 182736')
    assert.equal(regCount, 1);
    
  })
});
