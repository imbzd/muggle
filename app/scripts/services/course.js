'use strict';

/**
 * @ngdoc function
 * @name muggleApp.controller:CourseService
 * @description
 * # CourseService
 * Controller of the muggleApp
 */
angular.module('muggleApp')
  .service('CourseService', ['$rootScope', '$http', function ($rootScope, $http) {
    var service = {
      //courseist
      courselist: {},
      getcourselist: function (params, data) {
        var url = Api.host + Api.course.getcourselist.u;
        $http({
          method: Api.course.getcourselist.m,
          url: url,
          params: params,
          data: data
        }).success(function (data, status) {
          service.courselist = data;
          //广播事件 - getcourselist.success
          $rootScope.$broadcast('getcourselist.success');
        }).error(function (param, data) {
          //广播事件 - apiRequest.failed
          $rootScope.$broadcast('apiRequest.failed');
        });
      },

      mycourselist: {},
      getmycourselist: function (params, data) {
        var url = Api.host + Api.course.getmycourselist.u;
        $http({
          method: Api.course.getmycourselist.m,
          url: url,
          params: params,
          data: data
        }).success(function (data, status) {
          service.mycourselist = data;
          //广播事件 - getcourselist.success
          $rootScope.$broadcast('getmycourselist.success');
        }).error(function (param, data) {
          //广播事件 - apiRequest.failed
          $rootScope.$broadcast('apiRequest.failed');
        });
      },

      //courseview
      courseview: {},
      getcourseview: function (params, data) {
        var url = Api.host + Api.course.getcourseview.u;
        $http({
          method: Api.course.getcourseview.m,
          url: url,
          params: params,
          data: data
        }).success(function (data, status) {
          service.courseview = data;
          //广播事件 - getcourseview.success
          $rootScope.$broadcast('getcourseview.success');
        }).error(function (param, data) {
          //广播事件 - getcourseview.failed
          $rootScope.$broadcast('apiRequest.failed');
        });
      },

      //chapterinfo
      chapterinfo: {},
      getchapterinfo: function (params, data) {
        var url = Api.host + Api.course.getchapterinfo.u;
        $http({
          method: Api.course.getchapterinfo.m,
          url: url,
          params: params,
          data: data
        }).success(function (data, status) {
          service.chapterinfo = data;
          //广播事件 - getchapterinfo.success
          $rootScope.$broadcast('getchapterinfo.success');
        }).error(function (param, data) {
          //广播事件 - getchapterinfo.failed
          $rootScope.$broadcast('apiRequest.failed');
        });
      },

      //learnchapter
      learnchapter: function (params, data) {
        var url = Api.host + Api.course.learnchapter.u;
        $http({
          method: Api.course.learnchapter.m,
          url: url,
          params: params,
          data: data
        });
      },

      //getqiniumdhtml
      qnmdhtml: '',
      getqnmd: function (url) {
        $http({
          method: 'get',
          url: url,
          responseType: 'text'
        }).success(function (data, status) {
          service.qnmdhtml = data;

          //广播事件 - getqnmd.success
          $rootScope.$broadcast('getqnmd.success');
        }).error(function (param, data) {
          //广播事件 - getqnmd.failed
          $rootScope.$broadcast('apiRequest.failed');
        });
      }
    }
    return service;
  }]);
