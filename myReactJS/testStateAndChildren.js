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

    /*
     Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names.
     Instead, React DOM components expect DOM property names like className and htmlFor, respectively.
     */
    return (
      <div className="className" onClick={ this.handleClick }>
        You { like_or_not } this. You clicked { how_many_time_you_click } time. Click to toggle.
        <LikeButton.LikeButtonChildren name="raymond"></LikeButton.LikeButtonChildren>
      </div>
    );

  }

});

LikeButton.LikeButtonChildren = React.createClass({

  getInitialState: function() {

    return { 
      name: ''
    };

  },

  handleClick: function(event) {

    this.setState({ 
      name: !this.property.name
    });

  },

  render: function() {
    var name = this.props.name;
    return (
      <div>
        My name is { name }
      </div>
    );

  }

});

ReactDOM.render(
    <LikeButton>
    </LikeButton>
   ,
  document.getElementById('content')
);