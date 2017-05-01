var React = require('react');

// Arrow function for presentation components *statless*

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application build on Reac. I have built this for a React Course.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - this was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used this to search for weather data by city name.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;