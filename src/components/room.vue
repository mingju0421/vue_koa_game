<template>
  <div class="room">
      <div class="left"></div>
      <div class="right">
          <ChatRoom/>
      </div>
  </div>
</template>

<script>
const ChatRoom = () => import('./chatRoom')
export default {
    data () {
        return {

        }
    },
    components: {
        ChatRoom,
    }

}
</script>

<style lang="stylus" scoped>
.room
    display flex
    height 100%
    .left
        width 70%
        height 100%
    .right
        width 30%
        height 100%
</style>