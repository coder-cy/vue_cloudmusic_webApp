<template>

<div class="my_sheet_collection_container">
    <title-switch :data="{title, total}"></title-switch>
    <ul>
        <li is="sheet-list" v-for="(data,i) in dataList" :data="data" :key="i"></li>
    </ul>
</div>

</template>

<script>

import titleSwitch from '@/components/title_switch/index';
import sheetList from '@/components/sheet_list/index';

export default {
    components: {
        titleSwitch,
        sheetList
    },
    data() {
        return {
            title: '我收藏的歌单',
            total: 5,
            dataList: [
                {cover: '../../../static/icon/c6.png', title: '这应该是你比较喜欢听的歌曲了', total: 25},
                {cover: '../../../static/icon/c7.png', title: '欧美风格的音乐，安静的听', total: 13},
                {cover: '../../../static/icon/c8.png', title: '我心爱的霉霉', total: 14},
                {cover: '../../../static/icon/c9.png', title: '颤抖吧，骚年！！！', total: 19},
                {cover: '../../../static/icon/c10.png', title: '年轻时候追的歌', total: 24},
            ]
        }
    },
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

</style>


