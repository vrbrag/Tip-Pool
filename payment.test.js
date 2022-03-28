describe("Payments test (with setup and tear-down)", function () {
   beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
   });

   it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo()

      expect(Object.keys(allPayments).length).toEqual(1)
      expect(allPayments['payment1'].billAmt).toEqual('100')
      expect(allPayments['payment1'].tipAmt).toEqual('20')
      expect(allPayments['payment1'].tipPercent).toEqual(20)
   })

   it('should create a new payment, createCurPayment()', function () {
      let expectedPayment = {
         billAmt: '100',
         tipAmt: '20',
         tipPercent: 20,
      }
      expect(createCurPayment()).toEqual(expectedPayment)
   })

   it('should create a new row on #paymentTable with current bill, tip, and tip%, appendPaymentTable()', function () {
      let curPayment = createCurPayment()
      allServers['payment1'] = curPayment

      appendPaymentTable(curPayment)

      let currentTdList = document.querySelectorAll('#paymentTable tbody tr td')

      expect(currentTdList[0].innerText).toEqual('$100')
      expect(currentTdList[1].innerText).toEqual('$20')
      expect(currentTdList[2].innerText).toEqual('20%')
   })

   it('should not create a new payment with empty input, createCurPayment', function () {
      billAmtInput.value = '';
      tipAmtInput.value = ''
      let curPayment = createCurPayment()
      expect(curPayment).toEqual(undefined)
   })

   afterEach(function () {
      // teardown logic
      paymentTbody.innerHTML = ''
      summaryTds.innerHTML = ''
      allPayments = {};
      paymentId = 0;
      billAmtInput.value = '';
      tipAmtInput.value = ''
      serverTbody.innerHTML = ''
   });
})