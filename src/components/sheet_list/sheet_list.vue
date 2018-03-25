<template>

<li class="sheet_list_container">
    <i class="cover" :style="{backgroundImage: `url(${privateData.cover})`}"></i>
    <div class="box">    
        <div class="title">{{privateData.title}}</div>
        <div class="total">{{privateData.total}}首歌曲</div>
    </div>
    <i class="handler">
        <span class="handler_icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </i>
</li>

</template>

<script>


export default {
    props: ['data'],
    data() {
        return {
            privateData: this.data,
        }
    },
    
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$height: 60px;
.background_default {
    background-repeat: no-repeat;
    background-position: center;
}


.sheet_list_container {
    height: $height;
    border-bottom: .5px solid #d3d3d3;
    .cover {
        @extend .background_default;
        float: left;
        width: 50px;
        height: 50px;
        margin-left: 5px;
        transform: translateY(5px);
    }
    .box {
        float: left;
        margin-left: 10px;
        .title {
            height: $height/2;
            font-size: 14px;
            line-height: $height/2;
            color: gray;
        }
        .total {
            font-size: 12px;
            height: $height/2;
            line-height: $height/2;
        }
    }
    .handler {
        float: right;
        position: relative;
        width: $height;
        height: $height;
        .handler_icon {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 20px;
            height: 20px;
            margin-left: -10px;
            margin-top: -10px;
            text-align: center;
            span {
                display: block;
                margin-left: 10px;
                margin-bottom: 2px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: gray;
                text-align: center;
            }
        }
    }
}


</style>


