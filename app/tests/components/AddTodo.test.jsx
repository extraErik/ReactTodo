var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid data', () => {
        var todoText = 'Booyah';
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo prop with invalid data', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodoForm={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
