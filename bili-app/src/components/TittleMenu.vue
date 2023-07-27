<template>
  <div class="tittle-menu">
    <Item :isActive = "isActive" @active="$emit('active')">
        <div class="inner">
            <div class="left">
                <slot name="tittle"></slot>
            </div>
            <div class="right">
                <slot name="icon"></slot>
            </div>
        </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item"
export default {
    props : {
        isActive:{
            type:Boolean,//约束该属性的类型是Boolean
            required:true,//约束该属性必须要传递
        }
    },
    components : {
        Item,
    },
}
</script>

<style scoped>
    .tittle-menu{
        width: 100%;
        height: 46px;
        line-height: 46px;
    }
    .inener{
        padding: 0 20px;
    }
    .left{
        float: left;
        color: #212121;
        font-weight: 500;
        margin-left: 8px;
    }
    .right{
        float: right;
        font-size: 12px;
        color: #999;
        margin-right: 9px;
    }
</style>