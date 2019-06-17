import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);
let store = () => new Vuex.Store({
	state: {
		isLogin:false,
        isLogin_admin:false,
		token: "kong",
        token_admin: "kong1",
        image:""
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			state.isLogin =true
			sessionStorage.setItem("Token",token);
		},
        admin_setToken(state, token) {
			state.token_admin = token
			state.isLogin_admin =true
			sessionStorage.setItem("Token_admin",token);
		},
        setImage(state, token) {
			state.image = token
			sessionStorage.setItem("Iamge",token);
		},
		
	},
	actions:{
		setUser({commit},user){
	
			commit("setToken",user);

		},
        admin_setUser({commit},user){
	
			commit("admin_setToken",user);

		},
        setimg({commit},image){
	
			commit("setImage",image);

		}
	}
	

	
})

export default store