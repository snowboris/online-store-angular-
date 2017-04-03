(function(){

	var app = angular.module('store_directives',[]);
	app.directive("proditem", function() {
			return {
				restrict: 'A',
				templateUrl: './templates/string-table-product.html'
			};
		});

	app.directive('tableProducts',function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/table-products.html'
		};
	});

	app.directive('cardProduct', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/card-product.html'
		};
	});

})();