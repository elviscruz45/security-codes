const initialState= {
    value:'',
    error:false,
    loading:false,
    deleted:false,
    confirmed:false

}


// const reducer=(state,action)=>{   
// }



// THE FIRST WAY IS JUST CREATING A CLASSIC IF STATEMENT 
const reducerIF = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        }
    } else if (action.type === 'CONFIRM') {
        return {
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        }
    } else {
        return {
            ...state,
        }
    }
 }

// THE SECOND FORM TO CREATE A REDUCER IS USING ANOTHER ELEGANT JAVASCRIPT SINTAX
// WE USE SWITCH

const reducerSWITCH = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CONFIRM':
            return {
                ...state,
                error: false,
                loading: false,
                confirmed: true,
            };
        default:
            return {
                ...state,
            };
    }
 }

// THE THIRD FORM AND MOST USED BY JUAN DAVID CASTRO IS WHEN USING REDUCER OBJECT

const reducerOBJECT = (state) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
 })
  
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }