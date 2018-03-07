import Service, { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  accessToken: null,
  authorize() {
    return this.get('ajax').request('https://api.sandbox.paypal.com/v1/oauth2/token', {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-US',
        'Authorization': `Basic ${ btoa('AXYUgv3rUTOcfhQC_BNVvR73k7r9aMitG0zsB7kJ7IIwvTy7ZOwb8h44EZ_ANQYQrAT8dNofXMbKrDP5:EC2gxAQnxzIiLj74tC8AMl-mPoWFNj5Ep8-fc12tqgSSMoFBxFYMopNPkZdCBp7j5BO9J48Gz0Y7lqOX') }`
      },
      method: 'POST',
      data: 'grant_type=client_credentials'
    }).then((res) => {
      this.set('accessToken', res.access_token);
      return res;
    });
  },

  dispatch() {
    const transactionInfo = this._generateTransactionTemplate(),
          accessToken = this.get('accessToken');
    return this.get('ajax').request('https://api.sandbox.paypal.com/v1/payments/payment', {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US',
        'Authorization': `Bearer ${ accessToken }`
      },
      method: 'POST',
      data: transactionInfo
    });
  },
  _generateTransactionTemplate() {
    return {
      "intent": "sale",
      "payer": {
        "payment_method": "paypal"
      },
      "transactions": [{
        "amount": {
          "total": "30.11",
          "currency": "USD",
          "details": {
            "subtotal": "30.00",
            "tax": "0.07",
            "shipping": "0.03",
            "handling_fee": "1.00",
            "shipping_discount": "-1.00",
            "insurance": "0.01"
          }
        },
        "description": "The payment transaction description.",
        "custom": "EBAY_EMS_90048630024435",
        "invoice_number": "48787589673",
        "payment_options": {
          "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
        },
        "soft_descriptor": "ECHI5786786",
        "item_list": {
          "items": [{
            "name": "hat",
            "description": "Brown hat.",
            "quantity": "5",
            "price": "3",
            "tax": "0.01",
            "sku": "1",
            "currency": "USD"
          }, {
            "name": "handbag",
            "description": "Black handbag.",
            "quantity": "1",
            "price": "15",
            "tax": "0.02",
            "sku": "product34",
            "currency": "USD"
          }],
          "shipping_address": {
            "recipient_name": "Brian Robinson",
            "line1": "4th Floor",
            "line2": "Unit #34",
            "city": "San Jose",
            "country_code": "US",
            "postal_code": "95131",
            "phone": "011862212345678",
            "state": "CA"
          }
        }
      }],
      "note_to_payer": "Contact us for any questions on your order.",
      "redirect_urls": {
        "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
      }
    };
  }
});
