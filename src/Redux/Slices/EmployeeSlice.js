// import { Employee } from './BookignAction';
import { Employee } from '../Actions/Employee';
import { createSlice } from '@reduxjs/toolkit';

const EmployeeSlice = createSlice({
    name: 'booking',
    initialState: {
        data: [],
        status: '',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Employee.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(Employee.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(Employee.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default EmployeeSlice.reducer;
