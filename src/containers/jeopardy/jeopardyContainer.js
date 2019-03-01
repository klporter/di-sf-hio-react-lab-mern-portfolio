import {connect} from "react-redux";
import Jeopardy from "../../components/jeopardy/jeopardy";
import {updateScore, updateCategories, updateQuestionData} from "../../actions/jeopardy/jeopardy";

const mapStateToProps = state => {
    return {
        questionData: state.jeopardy.questionData,
        categories: state.jeopardy.categories,
        score: state.jeopardy.score
    };
};
const mapDispatchToProps = dispatch => {
    return {
        updateQuestionData: (question) => dispatch(updateQuestionData(question)),
        updateCategories: (categories) => dispatch(updateCategories(categories)),
        updateScore: (score) => dispatch(updateScore(score))
    }
};

const JeopardyContainer = connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
export default JeopardyContainer;