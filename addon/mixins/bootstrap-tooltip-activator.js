import Ember from 'ember';

var $ = Ember.$;
export default Ember.Mixin.create({
	timer: null,
	interval: 500,
	isActive: true,
	cachedElements: null,

	setCachedElements: Ember.on('init', function(){
		this.set('cachedElements', Ember.A([]));
	}),

	initTooltips: Ember.on('didInsertElement', function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			var cachedElements = this.get('cachedElements');
			if (this.get('isActive') && this.get('_state') === 'inDOM'){
				this.clearTooltipsOfDetachedElements();
				this.$('[data-toggle="tooltip"]').toArray().forEach(function(el){
					var $el = $(el),
						tooltipData = $el.data()['bs.tooltip'];
					if (!tooltipData){
						$el.tooltip();
						cachedElements.pushObject($el);
					}
				}, this);
				if (!this.get('timer')){
					this.set('timer', window.setInterval(Ember.run.bind(this, this.initTooltips), this.get('interval')));
				}
			}
		});
	}),

	clearTooltipsOfDetachedElements: function(){
		var cachedElements = this.get('cachedElements'),
			zombies = cachedElements.filter(function(el){
				return !Ember.$.contains(window.document, el[0]);
			});

		zombies.forEach(function(el){
			el.tooltip('destroy');
			cachedElements.removeObject(el);
			el.remove();
		});
	},

	destroyTooltips: Ember.on('willDestroyElement', function(){
		this._super();
		this.clearTooltipsOfDetachedElements();
		this.set('isActive', false);
		window.clearInterval(this.get('timer'));
		this.$('[data-toggle="tooltip"]').tooltip('destroy');
	})
	
});
