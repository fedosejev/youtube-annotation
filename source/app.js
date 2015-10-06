var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var UploadAndView = require('./components/UploadAndView.react');
// var Upload = require('./components/Upload.react');
// var View = require('./components/View.react');
var NotFound = require('./components/NotFound.react');

var Application = React.createClass({
  render: function () {
    return <RouteHandler params={this.props.params} />;
  }
});

var routes = (
  <Route name="application" path="/" handler={Application}>
    <Route name="uploadAndView" path="/youtube-annotation/" handler={UploadAndView} />
    <NotFoundRoute handler={UploadAndView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params} />, document.getElementById('app'));
});
