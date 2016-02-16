var React = require('react');
var UserActions = require("../../actions/UserActions");
var logoutImage = require('../../../images/logout.png');

var imageStyle = {
    marginRight: '5px',
    marginTop: '10px',
    position: 'absolute',
    right: '0',
    image: {
        width: '30px',
    }
};

var iconStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: '0'
};

var ProfileImage = React.createClass({
    onSignout: function() {
        UserActions.signout();
    },
    render: function() {
        return (
            <div style={imageStyle}>
                <button style={iconStyle} onClick={this.onSignout.bind(this)}>
                    <img src={logoutImage} style={imageStyle.image} />
                </button>
            </div>
        );
    }
});

module.exports = ProfileImage;
