<template>

<div class="my_play_container">
    <ul>
        <li v-for="(title,i) in titles" :key="i">
            <i class="icon" :style="{backgroundImage: `url(${title.icon})`}"></i>
            <span class="title">{{title.name}}</span>
            <span class="total">(100)</span>
            <i class="playing" v-show="i == 0 && isPlaying === true"></i>
        </li>
    </ul>
</div>

</template>

<script>

export default {
    data() {
        return {
            titles: [
                {icon: `../../../static/icon/music_red.png`, name: `我的音乐`},
                {icon: `../../../static/icon/current_red.png`, name: `最近播放`},
                {icon: `../../../static/icon/fm_red.png`, name: `我的电台`},
                {icon: `../../../static/icon/collection_red.png`, name: `我的收藏`},
            ],
            isPlaying: true
        }
    },
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$list_height: 50px;
.item_default {
    display: inline-block;
    height: $list_height;
}
.background_default {
    background-repeat: no-repeat;
    background-position: center;
}
.item_default {
    display: inline-block;
    height: $list_height;
    vertical-align: middle;
}



.my_play_container {
    ul {
        li {
            box-sizing: border-box;
            height: $list_height;
            border-bottom: .5px solid #d3d3d3;
            // line-height: $list_height;
            .icon {
                @extend .item_default;
                @extend .background_default;
                box-sizing: border-box;
                width: $list_height;
                border-bottom: 1px solid #fff;
            }
            .title {                
                @extend .item_default;
                line-height: $list_height;
            }
            .total {
                @extend .item_default;
                @extend .background_default;
                line-height: $list_height;
                margin-left: 2px;
                font-size: 12px;
                color: darken(#d3d3d3, 30%);
            }
            .playing {
                @extend .item_default;
                @extend .background_default;
                float: right;
                width: $list_height;
                background-image: url(../../../static/icon/playing.png);
            }
        }
    }
}


</style>


