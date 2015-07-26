import Ember from 'ember';
import config from 'dummy/config/environment';

const {
	tooltipContainer
} = config;

export default Ember.Controller.extend({
	buttons: Ember.computed(function(){
		var ret = Ember.A([]);
		var placements = ['top', 'right', 'bottom', 'left'];
		for (var i = 0; i < config.buttons; i++){
			ret.pushObject({
				name: 'Button No.' + i,
				tip: 'Tip No.' + i,
				number: i,
				placement : placements[i % 4],
				container: tooltipContainer
			});
		}
		return ret;
	})
});