<template>

<div class="play_bar_container">
    <i :style="{backgroundImage: `url(${currSongIcon})`}" class="current_play_icon"></i>
    <div class="current_play_info">
        <div class="current_play_name">小酒窝</div>
        <div class="current_play_author">林俊杰 蔡卓妍</div>
    </div>
    <div class="play_icon">
        <div class="play_btn"></div>
        <div class="option_btn"></div>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            currSongIcon: `../../../static/icon/current_play.png`,
        }
    }
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$main_color: #fff;
$height: 50px;
$icon_height: $height - 10;
$info_height: 25px;
.info_default {
    height: $info_height;
    line-height: $info_height;
}
.btn_default {
    float: left;
    width: $height - 5;
    height: $height;
}

.play_bar_container {
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: $height;
    background: #fff;
    .current_play_icon {
        float: left;
        width: $icon_height;
        height: $icon_height;
        margin: 5px;
        background-size: $icon_height;
        background-position: center;
    }
    .current_play_info {
        float: left;
        .current_play_name {
            @extend .info_default;
            color: #000;
            font-size: 16px;
        }
        .current_play_author {
            @extend .info_default;
            color: gray;
            font-size: 14px;
        }
    }
    .play_icon {
        float: right;
        .play_btn  {
            @extend .btn_default;
            background: url(../../../static/icon/bar_play.png) no-repeat center;
            background-size: 35px;
        }
        .option_btn {
            @extend .btn_default;
            background: url(../../../static/icon/bar_option.png) no-repeat center;
            background-size: 35px;
        }
    }
}
</style>
