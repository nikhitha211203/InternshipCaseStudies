import type{PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FileItem {
  id: string;
  name: string;
  content: string;
}

interface FileState {
  files: FileItem[];
}

const initialState: FileState = {
  files: [],
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<FileItem>) => {
      state.files.push(action.payload);
    },
    updateFile: (state, action: PayloadAction<FileItem>) => {
      const index = state.files.findIndex(
        (file) => file.id === action.payload.id
      );

      if (index !== -1) {
        state.files[index] = action.payload;
      }
    },
  },
});

export const { addFile, updateFile } = fileSlice.actions;
export default fileSlice.reducer;