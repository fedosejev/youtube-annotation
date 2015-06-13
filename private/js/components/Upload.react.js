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

  handleSubmit: function (event) {
    event.preventDefault();
    this.props.onPlay(this.state.videoId, this.state.data);
  },

  render: function () {

    var containerStyle = {
      height: '100%'
    };

    var h2Style = {
      //color: '#e74c3c',
      color: '#000',
      fontSize: '28px',
      fontWeight: '500',
      //textTransform: 'uppercase',
      textAlign: 'center'
    };

    var formStyle = {
      margin: '10px 0'
    };

    var buttonStyle = {
      marginLeft: '5px'
    };

    return (
      <div style={containerStyle}>
        <FileDragAndDrop onDrop={this.handleDrop}>
          <div className="container-fluid" style={containerStyle}>

            <h2 style={h2Style}>1. Drag and drop your JSON file:</h2>

            <JsonFormatExample data={this.state.data} />

            <h2 style={h2Style}>2. Provide YouTube video id:</h2>

            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">

                <form className="form-inline" style={formStyle} onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control input-lg" value={this.state.videoId} onChange={this.handleInputChange} />
                  </div>

                  <button type="submit" className="btn btn-default btn-danger btn-lg" style={buttonStyle}>Play</button>
                </form>

              </div>
            </div>

          </div>
        </FileDragAndDrop>
      </div>
    );
  }
});

module.exports = Upload;
