module.exports = function(SigExtern) {
  
  SigExtern.disableRemoteMethod('create',true);
  SigExtern.disableRemoteMethod('deleteById', true);
  SigExtern.disableRemoteMethod('updateAll', true);
  SigExtern.disableRemoteMethod('createChangeStream', true);
  SigExtern.disableRemoteMethod('findOne', true);
  SigExtern.disableRemoteMethod('exists', true);
  
};
