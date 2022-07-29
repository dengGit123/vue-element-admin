<template>
  <component :is="layoutType"></component>
</template>

<script>
import Classic from './classic/index.vue';
import Functional from './functional/index.vue';
import Plain from './plain/index.vue';
export default {
  name: 'Layouts',
  components: {
    Classic,
    Functional,
    Plain,
  },
  computed:{
	layoutType(){
		return this.$store.state.setting.layoutType
	}  
  },
  data () {
    return {
      //经典 classic，功能 functional，混合，简约 plain
    };
  }
};
</script>

<style>
</style>
