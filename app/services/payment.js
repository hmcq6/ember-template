import Service, { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  accessToken: null,
  authorize() {
    return this.get('ajax').request('https://api.sandbox.paypal.com/v1/oauth2/token', {
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-US',
        'Authorization': `Basic ${ btoa('') }`
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
        'Authorization': `Bearer ${ accessToken }`
      },
      method: 'POST',
      data: transactionInfo
    });
  },
  _generateTransactionTemplate() {
    return {
      intent: 'sale',
      payer: {
        payment_method: 'credit_card',
        funding_instruments: [{
          credit_card: {
            type: 'visa',
            number: '4111111111111111',
            expire_month: 2,
            expire_year: 2018,
            cvv2: '123',
            first_name: 'test',
            last_name: 'test',
            billing_address: {
              line1: '123 street',
              city: 'CityVille',
              state: 'CA',
              postal_code: '12345',
              country_code: 'US'
            }
          }
        }]
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: '30',
          details: {
            subtotal: '30'
          }
        },
        description: 'FE test'
      }],
      redirect_urls: {
        return_url: 'http://localhost:4200/checkout',
        cancel_url: 'http://localhost:4200/checkout'
      }
    };
  }

});
