<template>

<div class="my_music_container">
    <my-play></my-play>
    <my-sheet-self></my-sheet-self>
    <my-sheet-collection></my-sheet-collection>
    <personal></personal>
    <transition name="fade">
        <div v-show="isShowPersonal" class="my_music_mask"></div>
    </transition>    
</div>

</template>

<script>

import bus from '@/bus';
import myPlay from './my_play';
import mySheetSelf from './my_sheet_self';
import mySheetCollection from './my_sheet_collection';
import personal from './personal';

export default {
    data() {
        return {
            isShowPersonal: false,
        }
    },
    components: {
        myPlay,
        mySheetSelf,
        mySheetCollection,
        personal,
    },
    methods: {
        onShowMask() {
            bus.$on('SHOW_PERSONAL', (isShow) => {
                this.isShowPersonal = isShow;
            });
        },
    },
    mounted() {
        this.onShowMask();
    },
    beforeDestroy() {
        bus.$off('SHOW_PERSONAL');
    }

}

</script>

<style lang="scss" scoped="scoped" type="text/css">
.my_music_container {
    position: relative;
    top: 50px;
    .my_music_mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 5;
    }
}


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>


