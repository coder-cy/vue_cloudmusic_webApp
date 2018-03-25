<template>

<div class="nav_container">
    <div class="nav_personal"></div>
    <div class="nav_search"></div>
    <div class="nav_list">
        <ul>
            <li v-for="(icon,i) in 3" :key="i"></li>
        </ul>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            
        }
    }
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

$main_color: rgb(198,47,47);
$button_width: 50px;
$button_height: 50px;
$icon_personal: url(../../../static/icon/personal.png);
$icon_list: url(../../../static/icon/my_music.png) url(../../../static/icon/index.png) url(../../../static/icon/friend.png);
$icon_search: url(../../../static/icon/search.png);
.background_default {
    background-repeat: no-repeat;
    background-position: center;
}
.size_default {
    width: $button_width;
    height: $button_height;
    line-height: $button_height;
    text-align: center;
}




.nav_container {
    position: fixed;
    width: 100%;
    height: $button_height;  
    background-color: $main_color; 
    z-index: 1;
    .nav_personal {
        @extend .size_default;
        @extend .background_default;
        float: left;
        background-image: $icon_personal;
    }
    .nav_list {
        height: $button_height;
        margin: 0 50px;
        ul {
            display: flex;
            justify-content: center;
            li {
                @extend .size_default;
                @extend .background_default;
            }
            @for $i from 1 to length($icon_list)+1 {
                li:nth-of-type(#{$i}){
                    background-image: nth($icon_list,$i);
                }        
            }
        }
    }
    .nav_search {
        @extend .size_default;
        @extend .background_default;
        float: right;
        background-image: $icon_search;
    }
}



</style>

