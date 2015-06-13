var React = require('react');
var Video = require('./Video.react');
var Editor = require('./Editor.react');

var Add = React.createClass({
  render: function () {

    var containerStyle = {
      height: '100%'
    };

    return (
      <div style={containerStyle}>
        <div className="container-fluid" style={containerStyle}>
          <div className="row" style={containerStyle}>
            <div className="col-md-8" style={containerStyle}>
              <div className="row" style={containerStyle}>
                <Video />
              </div>
            </div>
            <div className="col-md-4">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Add;
