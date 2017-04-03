(function(){

	var app = angular.module('store',['store_directives']);

/*	app.controller('StoreController',['$http', function($http){

		var store = this;
		store.products = [];

		 $http.get('./api/app_info.json')
		.then(function(result){
			//alert(result.data);
			//store.products = result;
			store.products = result.data;
		},
		function(){
			alert("Error!");
		})


	}]);*/

	app.factory('httpq', function($http, $q){
		return {
			get : function() {
				var deffered = $q.defer();
				$http.get.apply(null,arguments)
				.then(deffered.resolve)
				.catch(deffered.resolve);
				return deffered.promise;
			}
		}
	});

	app.controller("StoreController", function(httpq){
		var store = this;
		store.tab = 1;

		store.products = [];

		httpq.get("./api/app_info.json")
			.then(function(datas){
				//alert("asdf");
				store.products = datas.data;
			})
			.catch(function(){
				alert("error");
			})
			.finally(function(){
				//alert("finally");
			});

		this.pageCardProduct = function(page,product){
			page = page || {};
			store.currentPage = page;
			store.dataProduct = product;
		};

		this.setTab = function(tab){
			store.tab = tab;
		}

		this.isSelect = function(curTab){
			return store.tab===curTab;
		}
	});
})();