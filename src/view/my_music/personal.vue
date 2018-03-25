<template>

<div @click="hidePersonal" :style="{left: isShow ? '0' : '-100%'}" class="personal_container">
    <div @click.stop class="personal_content">
        <div :style="{backgroundImage: `url(${userBgImage})`}" class="main_info">
            <i :style="{backgroundImage: `url(${userAvatar})`}" class="personal_avatar"></i>
            <div class="info_list">
                <span class="user_name">未曾遗忘的青春</span>
                <i :style="{backgroundImage: `url(${userClass})`}" class="user_class"></i>
                <i class="user_level">Lv.9</i>
                <span class="user_check_in">
                    <i class="check_in_icon"></i>
                    签到
                </span>
            </div>
        </div>
        <ul class="personal_list1">
            <li is="personal-list" v-for="(li,i) in list1" :listData="li" :key="i"></li>
        </ul>
        <ul class="personal_list2">
            <li is="personal-list" v-for="(li,i) in list2" :listData="li" :key="i"></li>
        </ul>
        <ul class="personal_list3">
            <li is="personal-list" v-for="(li,i) in list3" :listData="li" :key="i"></li>
        </ul>
        <div class="personal_config"></div>
    </div>
</div>

</template>

<script>

import bus from '@/bus';
import personalList from '@/components/personal_list/index';

export default {
    components: {
        personalList,

    },
    data() {
        return {
            clientH: document.documentElement.clientHeight || document.body.clientHeight,
            isShow: false,
            userBgImage:  '../../../static/icon/personal_bg.jpg',
            userAvatar:  '../../../static/icon/personal_avatar.jpg',
            userClass: '../../../static/icon/user_class.png',
            list1: [
                {icon: '', title: '我的消息'},
                {icon: '', title: '我的会员', remark: '2018.05.10到期'},
                {icon: '', title: '商城'},
            ],
            list2: [
                {icon: '', title: '我的好友'},
                {icon: '', title: '附近的人', remark: '2018.05.10到期'},
            ],
            list3: [
                {icon: '', title: '个性换肤', remark: '官方红'},
                {icon: '', title: '定时播放'},
                {icon: '', title: '音乐闹钟'},
                {icon: '', title: '驾驶模式'},
                {icon: '', title: '音乐云盘'},
            ],
        }
    },
    methods: {
        /*
            监听是否显示个人中心模块
        */
        onShowPersonal() {
            bus.$on('SHOW_PERSONAL', (isShow) => {
                this.isShow = isShow;
            });
        },
        hidePersonal() {
            bus.$emit('SHOW_PERSONAL', false);
        }
    },
    mounted() {
        this.onShowPersonal();
    },
    beforeDestroy() {
        bus.$off('SHOW_PERSONAL');
    }
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

.background_default {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}
.info_default {
    float: left;    
    height: 100%;
}

.personal_container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    transition: .5s;
    .personal_content {
        width: 75%;
        height: 100%;
        background: #fff;
        .main_info {
            @extend .background_default;
            position: relative;
            height: 25%;
            .personal_avatar {
                @extend .background_default;
                position: absolute;
                top: 50px;
                left: 15px;
                width: 56px;
                height: 56px;
                border-radius: 50%;
            }
            .info_list {
                position: absolute;
                bottom: 15px;
                width: 100%;
                height: 30px;
                .user_name {
                    @extend .info_default;
                    margin-left: 15px;
                    color: #fff;
                    font-size: 16px;
                }
                .user_class {
                    @extend .info_default;
                    @extend .background_default;
                    width: 14px;
                    height: 14px;
                    margin: 5px;
                }
                .user_level {
                    @extend .info_default;
                    width: 30px;
                    height: 18px;
                    line-height: 18px;
                    border: 1px solid #fff;
                    border-radius: 8px;
                    font-style: normal;
                    color: #fff;
                    text-align: center;

                }
                .user_check_in {
                    float: right;
                    height: 20px;
                    margin-right: 15px;
                    padding: 0 5px;
                    line-height: 20px;
                    border: 1.5px solid #fff;
                    border-radius: 8px;
                    color: #fff;
                    .check_in_icon {
                        display: inline-block;
                        vertical-align: middle;
                        width: 15px;
                        height: 15px;
                        margin-top: -2px;
                        border-radius: 50%;
                        background: #fff;
                    }
                }
            }
        }
    }
}

</style>


