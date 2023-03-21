import { create } from 'zustand';
import axios from 'axios';

const authStore = create ((set) => ({
    loggedIn: null,

    failedLogin: '',

    loginForm: {
        email: '',
        password: '',
    },

    signupForm: {
        email: '',
        password: '',
    },

    updateLoginForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value
                }                
            }
        })
    },

    updateSignupForm: (e) => {
        const {name, value} = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value
                }                
            }
        })
    },

    login: async (e) => {
        try {
        const {loginForm} = authStore.getState();

        await axios.post('/login', loginForm);     

        set({
            loggedIn: true,
            failedLogin: "",
            loginForm: {
                email: "",
                password: ""
            }});

        } catch (err) {
            console.log(err);
            set({ 
                loggedIn: false,
                failedLogin: "email and/or password are incorrect"
            });
        }

        console.log("authStore:" + authStore.getState().loggedIn);
    },

    getLoggedIn: () => {
        return authStore.getState().loggedIn;
    },

    checkAuth: async () => {
        try {
            await axios.get('/check-auth');
            set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
            console.log(err);
        }
        
    },

    signup: async () => {
        const {signupForm} = authStore.getState();

        const res = await axios.post('/signup', signupForm);     // try/catch block => what if signup fails?

        console.log(res);

        set({
            signupForm: {
                email: "",
                password: ""
            }
        })
    },

    logout: async () => {
        await axios.get('/logout');          // try/catch block

        set({loggedIn: false});
    }


}))

export default authStore;