// greeting.js
import React from 'react';

import styles from './styles.css';

class Greeting extends React.Component {
  render() {
    return (
      <div className={styles.greeting}>
        Hello World from React!
      </div>
    );
  }
}

export default Greeting;
