describe('test yearsAgo Function',function(){
  it('should return the difference between 1976 and the current date',function(){
    assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
  });

  it('should return the difference between 2000 and the current date',function(){
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
  });

  it('should return the difference between 2012 and the current date',function(){
    assert.equal((new Date().getFullYear() - 2012), yearsAgo(2012));
  });
});