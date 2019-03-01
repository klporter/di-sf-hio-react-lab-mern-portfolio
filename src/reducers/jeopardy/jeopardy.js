let initialState = {
    questionData: {},
    categories: [],
    score: 0
};

const jeopardy = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_QUESTION_DATA':
            return Object.assign({}, state, {
                questionData: action.newQuestion
            });
        case 'UPDATE_CATEGORIES':
            return Object.assign({}, state, {
                categories: action.newCategories
            });
        case 'UPDATE_SCORE':
            return Object.assign({}, state, {
                score: action.newScore,
                questionData: {}
            });

        default:
            return state;
    }
};
export default jeopardy;