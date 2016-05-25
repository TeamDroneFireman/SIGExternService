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
          {'id':'1','form': 'WATERPOINT_SUSTAINABLE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.114121,'long' : -1.636343}},
          {'id':'2','form': 'WATERPOINT','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.112228,'long' : -1.640710}},
          {'id':'3','form': 'WATERPOINT_SUSTAINABLE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.113218,'long' : -1.650110}},
          {'id':'4','form': 'SOURCE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.115228,'long' : -1.642710}}
        ];
        break;
      case 'Place du Parlement de Bretagne, 35000 Rennes, France' :
        means=[
          {'id':'5','form': 'WATERPOINT_SUSTAINABLE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.113743,'long' : -1.677971}},
          {'id':'6','form': 'SOURCE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.108743,'long' : -1.679821}},
          {'id':'7','form': 'WATERPOINT_SUSTAINABLE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.109743,'long' : -1.674821}},
          {'id':'8','form': 'WATERPOINT','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.112743,'long' : -1.677621}},
          {'id':'9','form': 'SOURCE','role':'string', 'isExternal':true, 'location':
            {'lat' : 48.113443,'long' : -1.676021}}
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
