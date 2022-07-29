export const transformMenu = (data) => {
	let menus = []
	function getItem(item){
		let newItem = {}
		newItem.path =  `/${item.urlAddress || item.enCode}`
		newItem.meta = {
			// icon
			title: item.fullName
		}
		if (item.hasChildren && item.children.length) {
		      newItem.children = [];
		      for (let i = 0, len = item.children.length; i < len; i++) {
		        newItem.children.push(getItem(item.children[i]))
		      }
		    } else {
		      newItem.children = null;
		    }
		return newItem
	}
	
	data.forEach((item) => {
	    menus.push(getItem(item))
	  })
	return menus
}