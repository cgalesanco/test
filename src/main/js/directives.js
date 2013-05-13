angular.module('directives',[])
    .directive('cgaChosen',function(){
      /**
       * Detects a Chosen remove operation in progress.
       * Checks for a click event in progress triggered from the remove item link.
       */
      function processingRemove(iElement) {
        if ( !window.event || window.event.type !== 'click' || window.event.target.tagName !== 'A' ) {
          return false;
        }
        var target = $(window.event.target);
        if ( !target.hasClass('search-choice-close')) {
          return false;
        }
        return $.contains(iElement.next().get(0),target.get(0));
      }

      return {
        compile:function(tElement) {
          tElement.addClass('chzn-select');

          return function (scope, iElement) {
            iElement.chosen();
            scope.$watch(function(){
              if (!processingRemove(iElement) )
                iElement.trigger('liszt:updated');
            });
          }
        }
      };
    });
