import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        question: '',
        answers: [
            {
                content: '',
                isCorrect: false
            }
        ]
    }
]

const examSlice = createSlice({
    name: 'exam',
    initialState: initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.push(initialState);
        },
        setQuestion: (state, action) => {
            state.question = action.payload
        },
        setAnswers: (state, action) => {
            const findIndex = state.findIndex((question) => question.question === action.payload.question);
            // state[findIndex].answers = 
        }
    },
});


export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;