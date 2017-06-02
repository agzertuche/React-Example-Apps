var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var Controls = require('controls');

describe('Controls', () => {
    it('should exists', () => {
        expect(Controls).toExist();
    });

    describe('render', () =>{
        it('shouls render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"></Controls>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('shouls render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"></Controls>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startedButton = $el.find('button:contains(Start)');

            expect($startedButton.length).toBe(1);
        });
    });
});