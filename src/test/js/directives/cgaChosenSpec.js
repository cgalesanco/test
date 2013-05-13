describe('The cga-chosen-directive',function(){
  var elem;
  var scope;

  beforeEach(module('directives'));

  beforeEach(inject(function($rootScope, $compile){
    elem = angular.element(
      '<div>' +
          '<select id="mySelect" data-cga-chosen data-ng-model="selection" ' +
                  'data-ng-options="o.id as o.name for o in options"></select>' +
      '</div>');


    scope = $rootScope;
    scope.selection = null;
    scope.options = [
      {id:1, name:'Option 1'},
      {id:2, name:'Option 2'}
    ];

    $compile(elem)(scope);
    scope.$digest();
  }));

  it('Adds the "chzn-select" class and calls chosen()',inject(function($rootScope,$compile){
    var selectElem = elem.find('select');
    expect(selectElem.hasClass('chzn-select')).toBe(true);
    expect(elem.find('div#mySelect_chzn').size()).toBe(1);
  }));

  it ('Reflects options changes in the chosen control', function(){
    var options = elem.find('div#mySelect_chzn ul.chzn-results>li');
    expect(options.size()).toBe(2);

    scope.$apply(function(scope){
      scope.options = [
        {id:1, name:'Option 1'},
        {id:2, name:'Option 2'},
        {id:3, name:'Option 3'}
      ];
    });

    options = elem.find('div#mySelect_chzn ul.chzn-results>li');
    expect(options.size()).toBe(3);
  });

  it ('User selections in the chosen control update the model', function(){
    var selectElem = elem.find('select');
    selectElem.val('0');  // Selects first item {id:1, name:'Option 1'}
    selectElem.trigger('change');

    expect(scope.selection).toBe(1);
  });

  it ('Changes in the selected element in the model are reflected in the chosen control', function(){
    var selectionIdx = 1;
    scope.$apply(function(scope) {
      scope.selection = scope.options[selectionIdx].id;
    });

    var selectElem = elem.find('select');
    expect(selectElem.val()).toBe(''+selectionIdx);
  });
});
