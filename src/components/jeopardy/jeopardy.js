import React, {Component} from 'react';
import _ from "lodash"

//import our service
import JeopardyService from "../../services/jeopardyService";

import GameBoard from "./gameboard"

import Categories from "./categories"

class Jeopardy extends Component {

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
    }

    getQuestion = (category) => {
        return this.client.getQuestion(category).then(result => {
            this.props.updateQuestionData(result.data[0]);
        })
    };

    getCategories = () => {
        return this.client.getCategories(3).then(result => {
            this.props.updateCategories(result.data);
        })
    };

    componentDidMount = () => {
        this.getCategories();
    };

    checkAnswer = (event) => {
        event.preventDefault();

        this.getCategories();

        const userAnswer = event.target.answer.value;
        if (userAnswer === this.props.questionData.answer) {
            this.props.updateScore(this.props.score + this.props.questionData.value);
        } else {
            this.props.updateScore(this.props.score - this.props.questionData.value);
        }
        event.target.answer.value = "";
    };

    render() {
        console.log(this.props.questionData.answer);
        if (_.isEmpty(this.props.questionData)) {
            return <Categories clickHandler={this.getQuestion} categories={this.props.categories}/>
        }

        return (
            <div>
                <GameBoard scoreGame={this.checkAnswer} questionData={this.props.questionData}
                           score={this.props.score}/>
            </div>
        );
    }
}

export default Jeopardy;