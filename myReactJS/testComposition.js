var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <Avatar.PagePic pagename={ this.props.pagePicture } />
        <Avatar.PageLink pagename={ this.props.pageLink } />
      </div>
    );
  }
});

Avatar.PagePic = React.createClass({
  render: function() {
    return (
      <img src={ this.props.pagename } style={{ marginBottom: '20px' }} />
    );
  }
});

Avatar.PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});

ReactDOM.render(
  <Avatar pageLink="raymond.seger.37" pagePicture="http://www.jihadwatch.org/wp-content/uploads/2015/11/erdogan.jpg" />,
  document.getElementById('content')
);