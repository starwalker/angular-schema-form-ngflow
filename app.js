/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['pascalprecht.translate', 'schemaForm-ngflow'])
.config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: '/schema-form-ngflow/example.html',
    permanentErrors: [404, 500, 501],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4,
    testChunks: false,
    singleFile: true
  };
  flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
  // Can be used with different implementations of Flow.js
  // flowFactoryProvider.factory = fustyFlowFactory;
}]).controller('FlowController', function($scope){
  $scope.schema = {
    type: 'object',
    title: 'Flow',
    properties: {
      name: {
        title: 'Name',
        type: 'string'
      },
      image: {
        title: 'Image',
        type: 'object',
        format: 'ngflow',
        description: 'Only jpg is allowd'
      }
    }
  };
  $scope.form = [
    'name',
     {
       key: 'image',
       flowOptions: {
         dropEnabled: false,
         fileSuccess: 'uploaded()'
       }
     }
  ];
  $scope.model = {};
  $scope.uploaded = function(){
    alert('done');
  };
  $scope.onSubmit = function(){
    console.log('submit');
  };
});
