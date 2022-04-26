describe('test total bill phone',function(){
 it('should return total',function(){
    assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
 });
 it('should return total of sms and call',function(){
  assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
 });
 it('should return total of sms',function(){
    assert.equal('R1.30', totalPhoneBill('sms, sms'));
   });
});
