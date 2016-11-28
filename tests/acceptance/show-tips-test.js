import Ember from 'ember';
import {
    module, test
}
from 'qunit';
import startApp from '../../tests/helpers/start-app';
import config from 'dummy/config/environment';

const INTERVAL = 1000,
    {
        RSVP: {
            Promise
        }
    } = Ember;

var application;

module('Acceptance | show tips', {
    beforeEach: function() {
        application = startApp();
    },

    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('tips are being shown and hidden', function(assert) {
    visit('/');
    return new Promise(function(resolve /*, reject*/) {
        andThen(function() {

            mouseoverButton(0);

        });

        function mouseoverButton(i, prevButtonSelector, prevTooltipSelector) {
            let selector = `#button-${i}`;

            if (i < config.buttons) {
                triggerEvent(`#button-${i}`, 'mouseover');
                andThen(function(){
                    if (prevButtonSelector) {
                        triggerEvent(prevButtonSelector, 'mouseout');
                        andThen(function(){
                            setTimeout(check, 1000);
                        });
                    } else {
                        check();
                    }

                });


            } else {
                resolve();
            }

            function check(){
                let $el = find(selector),
                    tooltipId = $el.attr('aria-describedby'),
                    tooltipSelector = `#${tooltipId}`;
                findWithAssert(tooltipSelector);
                if (prevTooltipSelector) {
                    assert.equal(find(prevTooltipSelector).length, 0);
                }
                setTimeout(function() {
                    mouseoverButton(i + 1, selector, tooltipSelector);
                }, INTERVAL);
            }
        }
    });

});
