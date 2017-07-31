const React = require('react');
const serialize = require('serialize-javascript');

module.exports = ({appData}) => {
    const sanitized = serialize(appData, { isJSON: true});
    return (    
        <script dangerouslySetInnerHTML={{__html: `window.appData = ${sanitized}`}} />
    );
};