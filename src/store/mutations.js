// functions

export const user = (state, data)=>{
    state.user = data;
    // console.log(state.user)

}

export const Authentication = (state, data)=>{
    state.isAuthenticate = data;
    // console.log(state.isAuthenticate)

}

export const profile = (state, data)=>{
    state.profile = data;
    // console.log(state.isAuthenticate)

}

export const profiles = (state, data)=>{
    state.profiles = data;
    // console.log(state.isAuthenticate)

}

export const loading = (state, data)=>{
    state.loading = data;
    // console.log(state.isAuthenticate)

}