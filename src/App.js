import React, { Component } from 'react';
import './css/styles.css';
import LoginForm from './components/LoginForm';
import MainSection from './components/MainSection';
import CustomersList from './components/button';

class App extends Component {
    state = {
        questions: ["question1"],
        answers: ["answer1"]
    }

    updateDatabase = (question, answer) => {
        const copy = {...this.state};
        copy.question.push(question);
        copy.answer.push(answer);
        this.setState(copy);
    }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;

// <MainSection
//               questions={this.state.question}
//               answers={this.state.answers}
//               updateDatabase={this.updateDatabase}/>
