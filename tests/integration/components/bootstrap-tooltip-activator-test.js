import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('bootstrap-tooltip-activator', 'Integration | Component | bootstrap tooltip activator', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-tooltip-activator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-tooltip-activator}}
      template block text
    {{/bootstrap-tooltip-activator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});