var LikeButton = React.createClass({

  getInitialState: function() {

    return { 
      liked: false, 
      howManyTimeYouClicked: 0 
    };

  },

  handleClick: function(event) {

    this.setState({ 
      liked: !this.state.liked, 
      howManyTimeYouClicked: this.state.howManyTimeYouClicked + 1
    });

  },

  render: function() {
    var like_or_not = this.state.liked ? 'like' : 'haven\'t liked';
    var how_many_time_you_click = this.state.howManyTimeYouClicked;

    return (
      <p onClick={ this.handleClick }>
        You { like_or_not } this. You clicked { how_many_time_you_click } time. Click to toggle.
      </p>
    );

  }

});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('content')
);