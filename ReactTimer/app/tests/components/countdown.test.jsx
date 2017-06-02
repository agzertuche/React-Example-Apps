var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('countdown');

describe('countdown', ()=> {
    it('should exist', () =>{
        expect(Countdown).toExist();
    });

    describe('handleSetCoundown', () => {
        it('should set state to started and countdown', (done) => {
            var countdownControl = TestUtils.renderIntoDocument(<Countdown/>);
            countdownControl.handleSetCountdown(10);

            expect(countdownControl.state.count).toBe(10);
            expect(countdownControl.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdownControl.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should never set count less than zero', (done) => {
            var countdownControl = TestUtils.renderIntoDocument(<Countdown/>);
            countdownControl.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdownControl.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            var countdownControl = TestUtils.renderIntoDocument(<Countdown/>);
            countdownControl.handleSetCountdown(3);
            countdownControl.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdownControl.state.count).toBe(3);
                expect(countdownControl.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should reset count on stopped', (done) => {
            var countdownControl = TestUtils.renderIntoDocument(<Countdown/>);
            countdownControl.handleSetCountdown(3);
            countdownControl.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdownControl.state.count).toBe(0);
                expect(countdownControl.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});