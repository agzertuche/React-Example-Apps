var React = require('react');
var Nav = require('nav');

// Stateless functional components
var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav></Nav>
                    {props.children}
                </div>
            </div>            
        </div>            
    );
};

module.exports = Main;