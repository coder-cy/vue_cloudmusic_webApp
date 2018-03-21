<template>

<div class="title_switch_container">
    <span class="switch">&gt;</span>
    <span class="title">{{privateData.title}}</span>
    <span class="total">({{privateData.total}})</span>
    <span class="config"></span>
</div>

</template>

<script>

export default {
    props: ['data'],
    data() {
        return {
            privateData: this.data
        }
    }
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$height: 25px;
.background_default {
    background-repeat: no-repeat;
    background-position: center;
}
.item_default {
    display: inline-block;
    height: $height;
    vertical-align: middle;
}
.font_dafault {
    line-height: $height;
    font-size: 12px;
    color: gray;
}


.title_switch_container {
    position: relative;
    top: 50px;
    height: $height;
    background-color: darken(#f3f3f3, 5%);

    .switch {
        @extend .item_default;
        width: $height;
        line-height: $height;
        margin-left: 5px;
        text-align: center;
        color: gray;
        transition: .5s;
        transform: rotate(90deg);
    }

    .title {
        @extend .item_default;
        @extend .font_dafault;
    }

    .total {
        @extend .item_default;
        @extend .font_dafault;

    }

    .config {
        @extend .item_default;
        @extend .background_default;
        float: right;
        width: $height;
        margin-right: 10px;
        background-image: url(../../../static/icon/config.png);

    }
}

</style>

