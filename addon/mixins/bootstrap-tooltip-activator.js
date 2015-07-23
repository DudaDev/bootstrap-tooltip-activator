import Ember from 'ember';

const Em = Ember;

const {
	$, Mixin, A, on,
	run: {
		bind,
		scheduleOnce
	}
} = Ember;

export default Mixin.create({
	timer: null,
	interval: 500,
	isActive: true,
	cachedElements: null,

	setCachedElements: on('init', function() {
		this.set('cachedElements', Em.A([]));
	}),

	initTooltips: on('didInsertElement', function() {
		scheduleOnce('afterRender', this, function() {
			let cachedElements = this.get('cachedElements');
			if (this.get('isActive') && this.get('_state') === 'inDOM') {
				this.clearTooltipsOfDetachedElements();
				this.$('[data-toggle="tooltip"]').toArray().forEach(function(el) {
					let $el = $(el),
						tooltipData = $el.data()['bs.tooltip'];
					if (!tooltipData) {
						$el.tooltip();
						cachedElements.pushObject($el);
					}
				}, this);
				if (!this.get('timer')) {
					this.set('timer', setInterval(bind(this, this.initTooltips), this.get('interval')));
				}
			}
		});
	}),

	clearTooltipsOfDetachedElements: function() {
		let cachedElements = this.get('cachedElements'),
			zombies = cachedElements.filter(function(el) {
				return !$.contains(document, el[0]);
			});

		zombies.forEach(function(el) {
			el.tooltip('destroy');
			cachedElements.removeObject(el);
			el.remove();
		});
	},

	destroyTooltips: on('willDestroyElement', function() {
		this._super();
		this.clearTooltipsOfDetachedElements();
		this.set('isActive', false);
		clearInterval(this.get('timer'));
		this.$('[data-toggle="tooltip"]').tooltip('destroy');
	})

});