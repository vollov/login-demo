'use strict';

demoApp.directive("showsMessageWhenHovered", function() {
	return {
		restrict: "A",
		link:function(scope, element, attributes) {
		    var originalMessage = scope.message;
		    element.bind("mouseover", function() {
		      scope.message = attributes.message;
		      scope.$apply();
		    });
		    element.bind("mouseout", function() {
		      scope.message = originalMessage;
		      scope.$apply();
		    });
		}
	};
});