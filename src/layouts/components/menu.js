const iconArr = ['el-icon-files', 'el-icon-notebook-1', 'el-icon-office-building', 'el-icon-school', 'el-icon-house',
  'el-icon-sold-out'
];
export default {
  name: 'IMenu',
  props: {
    menuData: {
      type: Array,
      required: true
    },
    router: {
      type: Boolean,
      required: true,
      default: true
    },
    defaultActive: {
      type: String,
      default: ''
    },
    mode:{
      type: String,
      default:'vertical'
    },
    // backgroundColor:{
    //   type: String,
    //   default:'#ffffff'
    // },
    // textColor:{
    //   type: String,
    //   default:'#303133'
    // },
    // activeTextColor:{
    //   type: String,
    //   default:'#1890ff'
    // },
    collapse:{
      type: Boolean
    },
	// //系统布局类型
	// layoutType: {
	// 	type: String,
	// 	default: ''
	// },
	// //暗黑，亮白模式
	// slideClass: {
	// 	type: String,
	// 	default: ''
	// },
  },
  data() {
    return {};
  },
  computed:{
  	layoutType(){
		return this.$store.state.setting.layoutType
	},
	 slideClass(){
	 	return this.$store.state.setting.slideClass
	 },
	 themeClass(){
		return this.$store.state.setting.themeClass 
	 }
  },
  methods: {
    renderTitleIcon(h, icon, title,menuType) {
      icon = icon !== undefined ? icon : iconArr[Math.floor((Math.random() * iconArr.length))];
      const i = h('i', {
        class: icon
      });
      let span = null
      if(menuType === 'el-menu-item'){
        span = h('span',{},title)
        return [i, span];
      }else{
        span = h('span', {}, title);
        return h('template', {
          slot: 'title'
        }, [i, span]);
      }
    },
    renderMenuItem(h, menu, pIndex, index) {
      return h('el-menu-item', {
        props: {
          index: menu.path || `item_${pIndex}_${index}`
        }
      }, this.renderTitleIcon(h, menu.meta.icon, menu.meta.title,'el-menu-item'));
    },
    renderSubmenu(h, menu, pIndex, index) {
      const itemArr = [
        this.renderTitleIcon(h, menu.meta.icon, menu.meta.title)
      ];
      const _pIndex = `${pIndex}_${index}`;
      menu.children.forEach((item, i) => {
        itemArr.push(this.renderItem(h, item, _pIndex, i));
      });
      return h('el-submenu', {
        props: {
          index: menu.path || `submenu_${pIndex}_${index}`,
          'popper-append-to-body': true,
		  'popper-class': `${this.layoutType} ${this.slideClass} ${this.themeClass}`
        }
      }, itemArr);
    },
    renderItem(h, menu, pIndex, index) {
      if (!menu.meta.hideInMenu) {
        return menu.children && menu.children.length ? this.renderSubmenu(h, menu, pIndex, index) : this
          .renderMenuItem(h, menu, pIndex, index);
      }
    },
    renderMenu(h, menuTree) {
      const menuArr = [];
      menuTree.forEach((item, i) => {
        menuArr.push(this.renderItem(h, item, '0', i));
      });
      return menuArr;
    }
  },
  render(h) {
    return h('el-menu', {
      props: {
        router: this.router,
        defaultActive: this.defaultActive,
        mode:this.mode,
        // backgroundColor:this.backgroundColor,
        // textColor: this.textColor,
        // activeTextColor: this.activeTextColor,
        collapse: this.collapse
      },
      on:{
        ...this.$listeners
      }
    }, this.renderMenu(h, this.menuData));
  }
};
