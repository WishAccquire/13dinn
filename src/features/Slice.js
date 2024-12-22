import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';



const initialState = {
    meets: localStorage.getItem("meets") ?
        JSON.parse(localStorage.getItem("meets")) : []
}

export const Slice = createSlice({
    name: 'meet',
    initialState,
    reducers: {
        validateorNot: (state, action) => {
            const meet = action.payload;
            console.log("Action payload:", meet);

            const index = state.meets.findIndex((p) => p.username === meet.username)
            if (index<0) {
                toast.error(' Fail to Authreize');
                return;
            }
            else{
                
            toast.success(' Successfully Authorized');
            }
           

        },
        addTheUsers: (state, action) => {
            const meet=action.payload;
            const index = state.meets.findIndex((p) => p.username === meet.username)
            if (index>=0) {
                toast.custom('Already a User With These UserName');
                return;
            }
            else{
                state.meets.push(meet);
                localStorage.setItem('meets',JSON.stringify(state.meets))
                toast.success("You are Register \n *Welcome*")
            }
            console.log(meet);

        },
        incrementByAmount: (state, action) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const { validateorNot, addTheUsers, incrementByAmount } = Slice.actions

export default Slice.reducer