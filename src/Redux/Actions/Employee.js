import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { url } from "../BaseURL";
import { BaseUrl } from "../Base_URL";

export const Employee = createAsyncThunk('Auth/Employee', async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${BaseUrl}/login`,
            data: data,
            header: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        console.error('Error fetching room search:', error);
        throw error;
    }
})