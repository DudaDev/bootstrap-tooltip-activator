import Ember from 'ember';

var $ = Ember.$;
export default Ember.Mixin.create({
	timer: null,
	interval: 500,
	isActive: true,
	didInsertElement: function(){
		this._super();
		this.initTooltips();
	},
	initTooltips: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			var cachedElements = this.get('cachedElements');
			if (this.get('isActive') && this.get('_state') === 'inDOM'){
				this.clearUnusedElements();
				this.$('[data-toggle="tooltip"]').toArray().forEach(function(el){
					var $el = $(el);
					if (!$el.data()['bs.tooltip']){
						$el.tooltip();
						cachedElements.pushObject($el);
					}
				}, this);
				if (!this.get('timer')){
					this.set('timer', window.setInterval(this.initTooltips.bind(this), this.get('interval')));
				}
			}
		});
	},
	clearUnusedElements: function(){
		var cachedElements = this.get('cachedElements'),
			zombies = cachedElements.filter(function(el){
				return el.parent().length === 0;
			});
		zombies.forEach(function(el){
			el.tooltip('destroy');
			cachedElements.removeObject(el);
			el.remove();
		});
	},
	willDestroyElement: function(){
		this._super();
		this.clearUnusedElements();
		this.set('isActive', false);
		window.clearInterval(this.get('timer'));
		this.$('[data-toggle="tooltip"]').tooltip('destroy');
	},
	cachedElements: Ember.A([])
});
