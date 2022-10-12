const periodData = [
  {
    name: "Clothing",
    data: [44, 55, 41, 67, 12, 76, 16, 43, 18, 24, 33, 45]
  },
  {
    name: "Shoes",
    data: [3, 12, 34, 7, 27, 18, 14, 23, 11, 13, 25, 21]
  },
  {
    name: "Accessories",
    data: [10, 11, 7, 15, 21, 12, 8, 9, 18, 12, 20, 17]
  },
]

const ordersData = [{"id":1,"billingName":"Lyon Bessent","email":"lbessent0@simplemachines.org","total":"$1.07", "status": "Paid", "date":"2/10/2022"},
{"id":2,"billingName":"Antons Poore","email":"apoore1@nature.com","total":"$5.54", "status": "Paid", "date":"2/15/2022"},
{"id":3,"billingName":"Ibby Brailsford","email":"ibrailsford2@sfgate.com","total":"$7.76", "status": "Paid", "date":"8/11/2022"},
{"id":4,"billingName":"Delila Berzins","email":"dberzins3@ihg.com","total":"$1.05", "status": "Refund", "date":"3/5/2022"},
{"id":5,"billingName":"Lisbeth Stokell","email":"lstokell4@dedecms.com","total":"$4.39", "status": "Paid", "date":"5/1/2022"},
{"id":6,"billingName":"Romain Seathwright","email":"rseathwright5@cdc.gov","total":"$9.08", "status": "Refund", "date":"9/22/2022"},
{"id":7,"billingName":"Darya Smorfit","email":"dsmorfit6@msn.com","total":"$8.65", "status": "", "date":"3/2/2022"},
{"id":8,"billingName":"Netta Gaishson","email":"ngaishson7@nature.com","total":"$1.66", "status": "Paid", "date":"1/26/2022"},
{"id":9,"billingName":"Christie Signori","email":"csignori8@youtu.be","total":"$5.59", "status": "Paid", "date":"8/22/2022"},
{"id":10,"billingName":"Genna Wimpress","email":"gwimpress9@google.pl","total":"$3.21", "status": "Paid", "date":"4/14/2022"},
{"id":11,"billingName":"Joyce Summers","email":"jsummersa@who.int","total":"$7.23", "status": "Paid", "date":"11/4/2021"},
{"id":12,"billingName":"Aviva Lasselle","email":"alasselleb@bloomberg.com","total":"$3.65", "status": "Refund", "date":"11/26/2021"},
{"id":13,"billingName":"Binky Lorrain","email":"blorrainc@berkeley.edu","total":"$2.01", "status": "Refund", "date":"1/10/2022"},
{"id":14,"billingName":"Val Dickson","email":"vdicksond@state.gov","total":"$3.48", "status": "Paid", "date":"1/17/2022"},
{"id":15,"billingName":"Hendrika Schubert","email":"hschuberte@prnewswire.com","total":"$4.58", "status": "Refund", "date":"10/17/2021"},
{"id":16,"billingName":"Lacie Karim","email":"lkarimf@netscape.com","total":"$6.30", "status": "Refund", "date":"2/15/2022"},
{"id":17,"billingName":"Rani Gemmill","email":"rgemmillg@studiopress.com","total":"$5.49", "status": "Refund", "date":"8/23/2022"},
{"id":18,"billingName":"Cobby McInnery","email":"cmcinneryh@geocities.jp","total":"$3.65", "status": "Paid", "date":"7/17/2022"},
{"id":19,"billingName":"Maryellen Thorogood","email":"mthorogoodi@ustream.tv","total":"$8.36", "status": "Paid", "date":"1/5/2022"},
{"id":20,"billingName":"Lorrayne McTeggart","email":"lmcteggartj@creativecommons.org","total":"$8.88", "status": "Paid", "date":"7/17/2022"}]

export { periodData, ordersData }
