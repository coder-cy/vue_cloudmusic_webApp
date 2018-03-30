<template>

<li class="personal_list_container">
    <i :style="{backgroundImage: `url(${icon})`}" class="list_icon"></i>
    <span class="list_title">{{title}}</span>
    <span v-if="remark" class="list_remark">{{remark}}</span>
</li>

</template>

<script>

export default {
    props: ['listData'],
    data() {
        return {
            icon: this.listData.icon,
            title: this.listData.title,
            remark: this.listData.remark,
        }
    },

}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$height: 40px;
.background_default {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
.info_default {    
    float: left;
    height: $height;
    line-height: $height;
}

.personal_list_container {
    height: $height;
    background: #fff;
    vertical-align: middle;
    .list_icon {
        @extend .background_default;
        @extend .info_default;
        width: 20px;
        height: 20px;
        margin: 10px;
    }
    .list_title {
        @extend .info_default;
        font-size: 14px;
    }
    .list_remark {
        @extend .info_default;
        float: right;
        font-size: 12px;
        color: gray;
        margin-right: 10px;
    }
}

</style>


