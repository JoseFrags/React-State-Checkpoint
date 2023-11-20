import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Clement Mihailescu',
      bio: 'We have vast knowledge about software-related areas to improve our work even more.',
      imgSrc: 'https://media.licdn.com/dms/image/C4E03AQFGzKboo0ZmHA/profile-displayphoto-shrink_800_800/0/1572585146559?e=2147483647&v=beta&t=8xXhhfpa5nYRmANMj8RTVqMrS7QJyqqqecfXl3c8-MY', // Placeholder image
      profession: 'Software Engineer',
    },
    show: false,
    intervalId: null,
    mountTime: new Date(),
  };

  componentDidMount() {
    // Set up an interval to update the mounted time every second
    const intervalId = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <img src={person.imgSrc} alt="Person" />
            <p>Full Name: {person.fullName}</p>
            <p>Bio: {person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;