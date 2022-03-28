describe("Payments test (with setup and tear-down)", function () {
   beforeEach(function () {
      // initialization logic
      submitPaymentInfo()
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
   });

   it('should sum total tips of all payments, sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20)
   })

   it('should get sum of total bill of all payments, sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100)
   })

   it('should get sum of total tip percent of all payments, sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20)
   })

   it('should create a new td value and append it in summary tr, appendTd(tr, value', function () {
      let newTr = document.createElement('tr')
      appendTd(newTr, 'test')
      expect(newTr.children.length).toEqual(1)
      expect(newTr.firstChild.innerHTML).toEqual('test')
   })

   it('should create a delete td and append it to tr, appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr')
      appendDeleteBtn(newTr);

      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X')
   })

   afterEach(function () {
      // teardown logic
      paymentTbody.innerHTML = ''
      summaryTds.innerHTML = ''
      allPayments = {};
      paymentId = 0;
      // billAmtInput.value = '';
      // tipAmtInput.value = ''
      serverTbody.innerHTML = ''
   });
})