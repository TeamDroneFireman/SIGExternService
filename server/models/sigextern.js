module.exports = function(SigExtern) {

  SigExtern.getSigListMock = function(address, cb) {
    var means;
    /*
      For information :
      0.004500 ~= 400m
    */
    switch (address) {
      case '263 Avenue Général Leclerc, 35700 Rennes, France' :
        means=[
          {'type': 'string', 'location': '48.114121, -1.636343'},
          {'type': 'string', 'location': '48.112228, -1.640710'},
          {'type': 'string', 'location': '48.113218, -1.650110'},
          {'type': 'string', 'location': '48.115228, -1.642710'}
        ];
        break;
      case 'Place du Parlement de Bretagne, 35000 Rennes, France' :
        means=[
          {'type': 'string', 'location': '48.113743, -1.677971'},
          {'type': 'string', 'location': '48.108743, -1.679821'},
          {'type': 'string', 'location': '48.109743, -1.674821'},
          {'type': 'string', 'location': '48.112743, -1.677621'},
          {'type': 'string', 'location': '48.113443, -1.676021'}
        ];
        break;
    }
    cb(null, means);
  };

  SigExtern.remoteMethod('getSigListMock', {
    description: 'Return a fixed Sig Example to mock an external Sig provider',
    accessType: 'READ',
    accepts: {arg: 'address', type: 'string', http: { source: 'query' } },
    returns: {type: 'array', root: true},
    http: {verb: 'get', path: '/'}
  });
};
