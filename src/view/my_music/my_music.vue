<template>

<div class="my_music_container">
    <my-play></my-play>
    <my-sheet-self></my-sheet-self>
    <my-sheet-collection></my-sheet-collection>
</div>

</template>

<script>

import myPlay from './my_play'
import mySheetSelf from './my_sheet_self'
import mySheetCollection from './my_sheet_collection'



export default {
    data() {
        return {
            
        }
    },
    components: {
        myPlay,
        mySheetSelf,
        mySheetCollection,
    }
}

</script>

<style lang="scss" scoped="scoped" type="text/css">
.my_music_container {
    position: relative;
    top: 50px;
}
</style>


