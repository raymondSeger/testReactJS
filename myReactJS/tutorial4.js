// tutorial4.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <div className="commentList">
    <Comment author="raymond">raymond content</Comment>
    <Comment author="Pete Hunt">This is one comment</Comment>
    <Comment author="Jordan Walke">This is *another* comment</Comment>
  </div>,
  document.getElementById('content')
);