import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getNoted = createAsyncThunk('noted/getNoted', async() => {
    const resposnse = await axios.get('http://localhost:3004/noted');
    return resposnse.data
});

export const saveNoted = createAsyncThunk('noted/saveNoted', async({title, note}) => {
    const resposnse = await axios.post('http://localhost:3004/noted', {
        title,
        note,
    });
    return resposnse.data
});

export const deleteNoted = createAsyncThunk('noted/deleteNoted', async(id) => {
    await axios.delete('http://localhost:3004/noted/' + id);
    return id
});

export const updateNoted = createAsyncThunk('noted/updateNoted', async({title, note, id}) => {
    const resposnse = await axios.patch(`http://localhost:3004/noted/${id}`, {
        title,
        note,
    });
    return resposnse.data
});

const notedEntity = createEntityAdapter({
    selectId: (noted) => noted.id
});
const notedSlice = createSlice({
    name : 'noted',
    initialState : notedEntity.getInitialState(),
    extraReducers: {
        [getNoted.fulfilled] : (state, action) => {
            notedEntity.setAll(state, action.payload);
        },
        [saveNoted.fulfilled] : (state, action) => {
            notedEntity.addOne(state, action.payload);
        },
        [deleteNoted.fulfilled] : (state, action) => {
            notedEntity.removeOne(state, action.payload);
        },
        [updateNoted.fulfilled] : (state, action) => {
            notedEntity.updateOne(state, {id : action.payload.id, update: action.payload});
        }
    }
})

export const notedSelectors = notedEntity.getSelectors(state => state.noted);
export default notedSlice.reducer;