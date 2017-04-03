(function(){

	var app = angular.module('panel',[]);

	app.controller('panelController', function(){

		this.tab=1;

		this.setPanel = function(setTab){
			this.tab=setTab;
		}

		this.isSelected = function(selected){
			return selected===this.tab;
		}

	});
})();