import React from 'react';

interface State {
  date: string;
}

interface Props {
  name: number;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId : NodeJS.Timer = setInterval(() => {});

  componentDidMount() {
    this.timerId = setInterval(
      () => this.setState({
        date: new Date().toLocaleTimeString(),
      }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line
    console.log(date);

    return date;
  }
}