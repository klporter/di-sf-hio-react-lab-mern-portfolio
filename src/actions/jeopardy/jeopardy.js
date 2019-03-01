export function updateQuestionData(question) {
    return {
        type: 'UPDATE_QUESTION_DATA',
        newQuestion: question
    }
}

export function updateCategories(categories) {
    return {
        type: 'UPDATE_CATEGORIES',
        newCategories: categories
    }
}

export function updateScore(score) {
    return {
        type: 'UPDATE_SCORE',
        newScore: score
    }
}