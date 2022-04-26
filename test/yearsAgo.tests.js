describe('test yearsAgo Function',function(){
  it('should return new date if when its a full year',function(){
    assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
  });

  it('should return new date if when its a full year',function(){
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
  });

  it('should return new date when its a different year',function(){
    assert.equal((new Date().getFullYear() - 2012), yearsAgo(2012));
  });
});