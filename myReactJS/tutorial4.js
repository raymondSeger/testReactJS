// tutorial4.js
var Comment = React.createClass({
  
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    );
  }
});

// render can only inserts 1 object, that is why we use <div className="commentList">
ReactDOM.render(
  <div className="commentList">
    <Comment author="raymond">raymond content</Comment>
    <Comment author="Pete Hunt">This is one comment</Comment>
    <Comment author="Jordan Walke">This is *another* comment</Comment>
  </div>,
  document.getElementById('content')
);

ReactDOM.render(
  <div className="commentList">
    <Comment author="raymond">raymond content</Comment>
    <Comment author="Pete Hunt">This is one comment</Comment>
    <Comment author="Jordan Walke">This is *another* comment</Comment>
  </div>,
  document.getElementById('content2')
);