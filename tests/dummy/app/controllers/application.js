import Ember from 'ember';
export default Ember.Controller.extend({
	buttons: Ember.computed(function(){
		var ret = Ember.A([]);
		var placements = ['top', 'right', 'bottom', 'left'];
		for (var i = 0; i < 100; i++){
			ret.pushObject({
				name: 'Button No.' + i,
				tip: 'Tip No.' + i,
				placement : placements[i % 4]
			});
		}
		return ret;
	})
});