import Ember from 'ember';
import layout from '../templates/components/bootstrap-tooltip-activator';
import BootstrapTooltipActivatorMixin from '../mixins/bootstrap-tooltip-activator';

export default Ember.Component.extend(BootstrapTooltipActivatorMixin, {
  layout: layout
});