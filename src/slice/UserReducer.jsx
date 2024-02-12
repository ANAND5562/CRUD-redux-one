import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    // Creating reducer & it's action
    reducers: {
        addUser: (state, action) => {
            // console.log("This is action ::", action);
            state.push(action.payload)
        },

        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            // console.log("name & email ::", name, email);

            const data = state.find(e => e.id == id)
            if (data) {
                data.name = name;
                data.email = email;
            }

        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            const data = state.find(user => user.id == id)
            if (data) {
                return state.filter(e => e.id !== id)
            }
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer