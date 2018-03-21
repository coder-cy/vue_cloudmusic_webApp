<template>

<div class="my_sheet_collection_container">
    <title-switch :data="{title, total}"></title-switch>
    <ul>
        <li is="sheet-list" v-for="(data,i) in dataList" :data="data" :key="i"></li>
    </ul>
</div>

</template>

<script>

import titleSwitch from '@/components/title_switch/index'
import sheetList from '@/components/sheet_list/index'

export default {
    components: {
        titleSwitch,
        sheetList
    },
    data() {
        return {
            title: '我创建的歌单',
            total: 5,
            dataList: [
                {cover: '../../../static/icon/c1.png', title: '我喜欢的音乐', total: 30},
                {cover: '../../../static/icon/c2.png', title: '在欧洲田园般的乡村上骑车', total: 15},
                {cover: '../../../static/icon/c3.png', title: '大卫爱上泰勒斯威夫特', total: 15},
                {cover: '../../../static/icon/c4.png', title: '【电音】抖腿必备', total: 19},
                {cover: '../../../static/icon/c5.png', title: '华语经典，是青春，是回忆', total: 36},
            ]
        }
    },
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

</style>


