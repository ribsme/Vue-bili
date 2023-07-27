<template>
  <div class="aside">
      <ChannelSearch />
      <TittleMenu :isActive="activeId === 100" @active="activeId = 100">
        <template v-slot:tittle>
          <!-- 给title具名插槽传递内容 -->
          发现频道
        </template>
        <template v-slot:icon>
          >
        </template>
      </TittleMenu>
      <ChannelList 
        :columns="2" 
        :activeId="activeId" 
        @active="activeId = $event" 
      />
  </div>
</template>

<script>
import TittleMenu from "./TittleMenu";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";
export default {
  components: {
    TittleMenu,
    ChannelList,
    ChannelSearch,
  },
  data() {
    return {
      activeId: 100, // 默认选中的是热门
    };
  },
};
</script>

<style scoped>
    .aside{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>