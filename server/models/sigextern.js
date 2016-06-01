module.exports = function(SigExtern) {

  SigExtern.getSigListMock = function(address, cb) {
    var means = [];
    /*
      For information :
      0.004500 ~= 400m
    */
    switch (address) {
      case '263 Avenue Général Leclerc, 35700 Rennes, France' :
        means = [
          {
            'form': 'WATERPOINT_SUSTAINABLE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.114121,
                'longitude': -1.636343
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '1',
            'name': 'Point d\'eau'
          },
          {
            'form': 'WATERPOINT',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.112228,
                'longitude': -1.640710
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '2',
            'name': 'Point d\'eau'
          },
          {
            'form': 'WATERPOINT_SUSTAINABLE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.113218,
                'longitude': -1.650110
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '3',
            'name': 'Point d\'eau'
          },
          {
            'form': 'SOURCE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.114421,
                'longitude': -1.631353
              }
            },
            'isExternal':true,
            'role': 'DEFAULT',
            'id': '4',
            'name': 'source'
          }
        ];
        break;
      case 'Place du Parlement de Bretagne, 35000 Rennes, France' :
        means = [
          {
            'form': 'WATERPOINT_SUSTAINABLE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.113743,
                'longitude': -1.677971
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '5',
            'name': 'Point d\'eau'
          },
          {
            'form': 'SOURCE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.112228,
                'longitude': -1.640710
              }
            },
            'isExternal':true,
            'role': 'DEFAULT',
            'id': '6',
            'name': 'source'
          },
          {
            'form': 'WATERPOINT_SUSTAINABLE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.109743,
                'longitude': -1.674821
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '7',
            'name': 'Point d\'eau'
          },
          {
            'form': 'WATERPOINT',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.114121,
                'longitude': -1.636343
              }
            },
            'isExternal':true,
            'role': 'WATER',
            'id': '8',
            'name': 'Point d\'eau'
          },
          {
            'form': 'SOURCE',
            'location': {
              'geopoint': {
                'altitude': 0,
                'latitude': 48.114121,
                'longitude': -1.636343
              }
            },
            'isExternal':true,
            'role': 'DEFAULT',
            'id': '9',
            'name': 'source'
          }
        ];
        break;
      default:
        means = [];
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
