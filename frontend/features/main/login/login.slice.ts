import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginState, IChangeInputPayload } from './login.interface';

const initialState: ILoginState = {
    id: '',
    pw: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<IChangeInputPayload>) => {
            state[action.payload.key] = action.payload.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeInput } = loginSlice.actions;

export default loginSlice.reducer;
