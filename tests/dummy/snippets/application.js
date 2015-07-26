import Ember from 'ember';
import config from 'dummy/config/environment';

const {
	tooltipContainer
} = config, {
	Controller, computed
} = Ember;

export default Controller.extend({
	buttons: computed(function() {
		var ret = Ember.A([]);
		var placements = ['top', 'right', 'bottom', 'left'];
		for (var i = 0; i < config.buttons; i++) {
			ret.pushObject({
				name: 'Button No.' + i,
				tip: 'Tip No.' + i,
				number: i,
				placement: placements[i % 4],
				container: tooltipContainer
			});
		}
		return ret;
	})
});