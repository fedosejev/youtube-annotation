var React = require('react');

var Annotation = React.createClass({

  render: function () {

    var textStyle = {
      color: '#000',
      fontSize: '16px',
      fontWeight: '300',
      textAlign: 'left',
      padding: '10px 0'
    };

    var noAnnotationStyle = {
      color: '#aaa',
      fontSize: '16px',
      fontWeight: '300',
      textAlign: 'left',
      padding: '10px 0',
      fontStyle: 'italic'
    };

    var elapsedTime = this.props.elapsedTime;
    var data = this.props.data;

    return (
      <div style={textStyle}>
        {data[elapsedTime] ? data[elapsedTime]: <span style={noAnnotationStyle}>No annotation.</span>}
      </div>
    );
  }
});

module.exports = Annotation;
