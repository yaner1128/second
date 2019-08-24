//1.引入
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

//2.创建实例
let store = new Vuex.Store({
	//三大将
	state:{
		//创建一个对象用于存储信息
		isindex:true,
		// isshow:true,
		// flag:true,
		isname:'',
		// allnews:{},
	},
	//修改状态的唯一方法是提交mutations
	mutations:{
		isHome(state,val){
			state.isindex=val;
		},
		isname(state,val){
			state.isname=val;
		}
	},
	actions:{
		
	}
});

//抛出
export default store;