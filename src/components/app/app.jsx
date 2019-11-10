import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];
    const questionProps = {
      screenIndex: question,
      question: currentQuestion,
      onAnswer: onUserAnswer
    };

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        {...questionProps}
      />;

      case `artist`: return <ArtistQuestionScreen
        {...questionProps}
      />;
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };

    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleAnswer() {
    this.setState((prevState, questions) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;

      return {
        question: !isEnd ? nextIndex : -1,
      };
    });
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, this._handleAnswer);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.exact({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    song: PropTypes.object.isRequired
  }))
};

export default App;
