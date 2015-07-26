import {
    moduleForComponent,
    test
}
from 'ember-qunit';
import Ember from 'ember';
const {
    RSVP: {
        Promise
    },
    run: {
        bind,
        later
    }
} = Ember;

moduleForComponent('bootstrap-tooltip-activator', 'Unit | Component | bootstrap tooltip activator', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Creates the component instance
  this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text().trim(), '');
});

test('it runs an interval handler', function(assert) {
    // Creates the component instance
    var component = this.subject();

    // Renders the component to the page
    this.render();
    return new Promise(bind(this, function(resolve /*, reject*/ ) {
        later(this, function() {

            assert.ok(!!component.get('timer'), 'Timer was not initialized');

            resolve();
        }, 500);
    }));
});

test('it destroys the interval handler', function(assert) {
    // Creates the component instance
    var component = this.subject();

    // Renders the component to the page
    this.render();
    return new Promise(bind(this, function(resolve /*, reject*/ ) {
        later(this, function() {

            component.destroy();
            assert.ok(!component.get('timer'), 'Timer was not destroyed');
            resolve();

        }, 500);
    }));
});