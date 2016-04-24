import conekta from 'conekta';


conekta.api_key = 'key_4R3qyh1z8axkrLYW';
conekta.locale = 'es';
console.log("hola Jorge")

// conekta.Charge.create({
//   "description":"Plan Plus",
//   "amount": 20000,
//   livemode: false,
//   "currency":"MXN",
//   "reference_id":"9839-wolf_pack",
//   "card": "tok_test_visa_4242",
//   "details": {
//     "name":"Jorge Dzul",
//     "phone":"403-342-0642",
//     "email":"zorch.mcclaud.da@gmail.com",
//     "line_items": [{
//       "name": "Plan Plus",
//       "description": "Imported From Mex.",
//       "unit_price": 20000,
//       "quantity": 1,
//       "sku": "sku1"
//     }],
//     "shipment": {
//       "carrier":"fedex",
//       "service":"nacional",
//       "price": 20000,
//       "address": {
//         "street1": "250 Alexis St",
//         "street2": "Interior 303",
//         "street3": "Col. Condesa",
//         "city":"Red Deer",
//         "state":"Alberta",
//         "zip":"T4N 0B8",
//         "country":"Canada"
//       }
//     }
//   }
// }, function(err, res) {
// 	if(err)
// 		return console.log(err.message_to_purchaser)
//     console.log(res);
// });

conekta.Customer.create({
  "name":"Jorge Dzul",
  "email":"zorch.mcclaud.da@gmail.com",
  "phone":"8261275954",
  "cards":["tok_test_visa_4242"],
  "plan":"plan-1000"
}, function(err, res) {
	if(err)
		return console.log(err)
    console.log(res.toObject());
});


// customer = conekta.Customer.find("cus_k2D9DxlqdVTagmEd400001", function(err, customer) {
//   customer.createSubscription({
//     plan: 'plan_mpnQXeFzk2ex6dad'
//   }, function(err, res) {
//     console.log(res);
//   });
// });