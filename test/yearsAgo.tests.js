describe('test yearsAgo Function', function () {
  it('should return error "string is passed ', function () {
    assert.equal(yearsAgo("yanga"), "invalid data type!");
  });

  it('should return only 4 numbers', function () {
    assert.equal(yearsAgo(124523), "the length of a year is 4 number: error!");
  });

  it('should return the current date', function () {
    assert.equal(yearsAgo(1976), 46);
  });
});