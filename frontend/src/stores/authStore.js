import { create } from 'zustand';
import axios from 'axios';

const authStore = create ((set) => ({
    loggedIn: null,

    failedLogin: '',

    loginForm: {
        username: '',
        password: '',
    },

    signupForm: {
        username: '',
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

            const res = await axios.post('/login', loginForm);     

            set({
                loggedIn: true,
                failedLogin: "",
                loginForm: {
                    username: "",
                    password: ""
                }});

            return res
        } catch (err) {
            console.log(err);
            set({ 
                loggedIn: false,
                failedLogin: "username and/or password are incorrect"
            });
        }

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
        try {
            const {signupForm} = authStore.getState();

            const res = await axios.post('/signup', signupForm);     

            set({
                signupForm: {
                    username: "",
                    password: ""
                }
            })
            return res;
        } catch (err) {
            return err;
        }
    },

    logout: async () => {
        try {
            await axios.get('/logout');          
            set({loggedIn: false});
        } catch (err) {
            console.log(err);
        }
    }


}))

export default authStore;