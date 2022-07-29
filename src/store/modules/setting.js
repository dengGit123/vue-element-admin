export default {
  namespaced: true,
  state: {
	  isCollapse: false,
	  layoutType: 'classic',
	  slideClass: 'dark',
	  themeClass:'blue',
	  themeColor:'#1890ff',
  },
  mutations: {
	  setIsCollapse(state,isCollapse){
		state.isCollapse = isCollapse;  
	  },
	  setLayoutType(state,layoutType){
	  		state.layoutType = layoutType;  
	  },
	  setSlideClass(state,slideClass){
	  		state.slideClass = slideClass;  
	  },
	  setThemeClass(state,themeClass){
	  		state.themeClass = themeClass;
	  },
	  setThemeColor(state,themeColor){
		  state.themeColor = themeColor;
	  }
  },
  actions: {}
}