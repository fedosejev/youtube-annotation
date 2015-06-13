var React = require('react');

var JsonFormatExample = React.createClass({
  render: function () {

    var textStyle = {
      fontFamily: 'Monospace',
      color: '#e74c3c',
      fontSize: '18px',
      fontWeight: '300',
      textAlign: 'center',
      padding: '10px 0'
    };

    var elapsedTime = this.props.elapsedTime;

    return (
      <div style={textStyle}>
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
});

module.exports = JsonFormatExample;
