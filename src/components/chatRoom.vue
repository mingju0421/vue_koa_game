<template>
    <div class="chatRoom">
        <div class="view" ref="view">
            <div class="chatList" v-for="(chat, index) in chatList" :key="index" ref="chatList">
                <div class="me" v-if="chat.side === 'me'">
                    <span class="chatContainer">{{chat.content}}</span><img src="../assets/logo.png" alt="">
                </div>
                <div class="other" v-else>
                    <img src="../assets/logo.png" alt=""><span class="chatContainer">{{chat.content}}</span>
                </div>
            </div>
        </div>
        <div class="input">
            <el-input
                type="textarea"
                :autosize='{ minRows: 3, maxRows: 3 }'
                placeholder="请输入内容"
                v-model="textarea"
                @change="sendChat"
                >
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            textarea: '',
            chatList: []
        }
    },
    methods: {
        sendChat () {
            this.chatList.push({side: 'me', content: this.textarea})
            this.textarea = ''
            this.$nextTick(() => {
                this.$refs.view.scrollTop = this.$refs.view.scrollHeight
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.chatRoom
    height 100%
    border 1px solid #ccc
    display flex
    flex-direction column
    .view
        flex-grow 1
        border-bottom 1px solid #ccc
        overflow auto
        .chatContainer
            padding 5px 
            border-radius 5px
            border 1px solid #ebeef5
            text-align left 
            display inline-block
            white-space: pre-line;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
            max-width 60%
        
        .me
            min-height 20px
            text-align right 
            margin 5px 0 10px
            img 
                height 20px
                border-radius 50%
                margin-left 10px
        .other
            margin 5px 0 10px
            min-height 20px
            img 
                height 20px
                border-radius 50%
                margin-right 10px
        
    .input
        // height 60px
</style>