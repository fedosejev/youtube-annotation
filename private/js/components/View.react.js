var React = require('react');
var Video = require('./Video.react');
var Annotation = require('./Annotation.react');

var View = React.createClass({

  getInitialState: function () {
    return {
      elapsedTime: 0,
      isPlayerReady: false
    };
  },

  onPlayerReady: function () {
    this.setState({
      isPlayerReady: true
    });
  },

  onElapsedTimeChange: function (elapsedTime) {
    this.setState({
      elapsedTime: Math.floor(elapsedTime / 1000)
    });
  },

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

                <Video
                  onPlayerReady={this.onPlayerReady}
                  onElapsedTimeChange={this.onElapsedTimeChange} />

              </div>
            </div>
            <div className="col-md-4">

              {
                this.state.isPlayerReady ?
                <Annotation elapsedTime={this.state.elapsedTime} data={this.props.data} />
                : null
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = View;
