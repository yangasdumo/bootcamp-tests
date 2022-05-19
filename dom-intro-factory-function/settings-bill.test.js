
describe('The bill with settings of factory functions', function () {
    it('should be able to set a call', function () {
        let SettingsBill = BillWithSettings();
        SettingsBill.setCallCost(1.85);
        assert.equal(1.85, SettingsBill.getCallCost());

    });

    it('should be able to set a call', function () {
        let SettingsBill2 = BillWithSettings();
        SettingsBill2.setCallCost(2.75);
        assert.equal(2.75, SettingsBill2.getCallCost());
    });

    it('should be able to set a sms', function () {
        let SettingsBill2 = BillWithSettings();
        SettingsBill2.setSmsCost(0.75);
        assert.equal(0.75, SettingsBill2.getSmsCost());
    });

    it('should be able to set a call and sms', function () {
        let SettingsBill = BillWithSettings();

        SettingsBill.setCallCost(2.75);
        SettingsBill.setSmsCost(0.75);

        assert.equal(2.75, SettingsBill.getCallCost());
        assert.equal(0.75, SettingsBill.getSmsCost());
    });


    it('should be able to set a call and sms', function () {
        let SettingsBill2 = BillWithSettings();

        SettingsBill2.setCallCost(1.75);
        SettingsBill2.setSmsCost(0.85);

        assert.equal(1.75, SettingsBill2.getCallCost());
        assert.equal(0.85, SettingsBill2.getSmsCost());
    });

    it('should be able to set a WarningLevel ', function () {
        let SettingsBill = BillWithSettings();

        SettingsBill.setWarningLevel(20);

        assert.equal(20, SettingsBill.getWarningLevel());

    });

    it('should be able to set a CriticalLevel ', function () {
        let SettingsBill = BillWithSettings();

        SettingsBill.setCriticalLevel(30);

        assert.equal(30, SettingsBill.getCriticalLevel());

    });

    it('should be able to set a Waring and CriticalLevel', function () {
        let SettingsBill = BillWithSettings();

        SettingsBill.setWarningLevel(15);
        SettingsBill.setCriticalLevel(25);

        assert.equal(15, SettingsBill.getWarningLevel());
        assert.equal(25, SettingsBill.getCriticalLevel());
    });
    describe('Use Values', function () {
        it('should be able to use the call set use', function () {
            let SettingsBill = BillWithSettings();
            SettingsBill.setCriticalLevel(10);
            SettingsBill.setCallCost(2.25);
            SettingsBill.setSmsCost(0.85);

            SettingsBill.MakeCall();
            SettingsBill.MakeCall();
            SettingsBill.MakeCall();


            assert.equal(6.75, SettingsBill.getTotalCost());
            assert.equal(6.75, SettingsBill.getTotalCallCost());
            assert.equal(0.00, SettingsBill.getTotalSmsCost());
        });
        it('should be able to use the call set of 2 calls at 1.35 each', function () {
            let SettingsBill = BillWithSettings();

            SettingsBill.setCriticalLevel(10);
            SettingsBill.setCallCost(1.35);
            SettingsBill.setSmsCost(0.85);

            SettingsBill.MakeCall();
            SettingsBill.MakeCall();



            assert.equal(2.70, SettingsBill.getTotalCost());
            assert.equal(2.70, SettingsBill.getTotalCallCost());
            assert.equal(0.00, SettingsBill.getTotalSmsCost());
        });
        it('should be able to send 2 sms`s at 0.85 each', function () {
            let SettingsBill = BillWithSettings();

            SettingsBill.setCriticalLevel(10);
            SettingsBill.setCallCost(1.35);
            SettingsBill.setSmsCost(0.85);

            SettingsBill.sendSms();
            SettingsBill.sendSms();



            assert.equal(1.70, SettingsBill.getTotalCost());
            assert.equal(0.00, SettingsBill.getTotalCallCost());
            assert.equal(1.70, SettingsBill.getTotalSmsCost());
        });
        it('should be able to send 2 sms`s at 0.85 each and make 1 call 1.35', function () {
            let SettingsBill = BillWithSettings();

            SettingsBill.setCriticalLevel(10);
            SettingsBill.setCallCost(1.35);
            SettingsBill.setSmsCost(0.85);

            SettingsBill.sendSms();
            SettingsBill.sendSms();
            SettingsBill.MakeCall();


            assert.equal(3.05, SettingsBill.getTotalCost());
            assert.equal(1.35, SettingsBill.getTotalCallCost());
            assert.equal(1.70, SettingsBill.getTotalSmsCost());
        });
        describe('Critical & Warning Level', function () {
            it('should return the class of warning level if the warning level is reached', function () {
                let SettingsBill = BillWithSettings();

                SettingsBill.setCallCost(1.35);
                SettingsBill.setSmsCost(0.85);
                SettingsBill.setWarningLevel(5);
                SettingsBill.setCriticalLevel(10);
                
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                 
                assert.equal("warning", SettingsBill.totalClassName());

            });
            it('should return the class of critical level if the critical level has been reached', function () {
                let SettingsBill = BillWithSettings();

                SettingsBill.setCallCost(2.50);
                SettingsBill.setSmsCost(0.85);
                SettingsBill.setCriticalLevel(10);
                
                
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();

                assert.equal("danger", SettingsBill.totalClassName());

            });
            it('should stop the Total Call cost from increasing when critical level has been reached', function () {
                let SettingsBill = BillWithSettings();

                SettingsBill.setCallCost(2.50);
                SettingsBill.setSmsCost(0.85);
                SettingsBill.setCriticalLevel(10);
                
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();

                assert.equal("danger", SettingsBill.totalClassName());
                assert.equal(10, SettingsBill.getTotalCallCost());
            });
            it('should allow the total to increase after reaching the critical Level & upping the critical level.', function () {
                let SettingsBill = BillWithSettings();

                SettingsBill.setCallCost(2.50);
                SettingsBill.setSmsCost(0.85);
                SettingsBill.setWarningLevel(8);
                SettingsBill.setCriticalLevel(10);
                
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();

                assert.equal("danger", SettingsBill.totalClassName());
                assert.equal(10, SettingsBill.getTotalCallCost());

                SettingsBill.setCriticalLevel(20);

                assert.equal("warning", SettingsBill.totalClassName());
                SettingsBill.MakeCall();
                SettingsBill.MakeCall();
                assert.equal(15, SettingsBill.getTotalCallCost());

            });
        });
    });

});