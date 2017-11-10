(function () {
    'use strict';
    app.controller('groupController', groupController);
	groupController.$inject = ['$scope', 'appCommon', 'groupService'];	
	function groupController($scope, appCommon, groupService) {
		/* models */
		$scope.paging = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		
		/* functions */
		var activate = function () {
			// userService.getUsers().then(function (result) {
			// 	$scope.users = result;
			// 	$scope.messageSuccess.push(String.format("Get Users is success. Total: {0} rows", $scope.users.length));
			// }, function (error) {
			// 	$scope.messageError.push(error);
			// });
		};
		
		
		/* start */
		activate();
	}
})();