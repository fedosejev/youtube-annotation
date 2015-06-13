var React = require('react');
var FileDragAndDrop = require('react-file-drag-and-drop');
var JsonFormatExample = require('./JsonFormatExample.react');

var Upload = React.createClass({

  getInitialState: function () {
    return {
      data: {
        0: 'This is the first second.',
        1: 'This is the second second.'
      },
      videoId: 'e-ORhEE9VVg'
    };
  },

  handleInputChange: function (event) {
    this.setState({
      videoId: vent.target.value
    });
  },

  handleDrop: function (dataTransfer) {
    var files = dataTransfer.files;
    var file = files[0];

    var fileReader = new FileReader();

    fileReader.onload = function (event) {
      var fileContent = event.target.result;

      this.setState({
        data: JSON.parse(fileContent)
      });
    }.bind(this);

    fileReader.readAsText(file);
  },

  handleClick: function (event) {
    this.props.onPlay(this.state.videoId, this.state.data);
  },

  render: function () {

    var containerStyle = {
      height: '100%'
    };

    var h2Style = {
      color: '#e74c3c',
      fontSize: '28px',
      fontWeight: '600',
      textTransform: 'uppercase',
      textAlign: 'center'
    };

    return (
      <div style={containerStyle}>
        <FileDragAndDrop onDrop={this.handleDrop}>
          <div className="container-fluid" style={containerStyle}>

            <h2 style={h2Style}>1. Drag and drop your JSON file</h2>

            <JsonFormatExample data={this.state.data} />

            <h2 style={h2Style}>2. Tell YouTube video id:</h2>

            <div className="row">
              <div className="col-md-2 col-md-offset-5 text-center">

                <input type="text" className="form-control input-lg" placeholder="" value={this.state.videoId} onChange={this.handleInputChange} />
                <button className="btn btn-default" onClick={this.handleClick}>Play</button>

              </div>
            </div>

          </div>
        </FileDragAndDrop>
      </div>
    );
  }
});

module.exports = Upload;
