import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>test</Button>
    </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));