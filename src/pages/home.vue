<template>
    <div class="home">
        <el-header>
            <div class="avatarWrap">
                <img src="../assets/logo.png" alt="" class="avatar">
                <div class="userName">mingju</div>
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color=#B3C0D1>
                <el-menu-item index="record">历史战绩</el-menu-item>
                <el-menu-item index="room">对战开房</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
          <div class="recordWrap" v-if="activeIndex === 'record'">
            record
          </div>
          <div class="roomWrap" v-else>
            <div class="room" v-for="room in roomArray" :key="room.id" @click="toRoom(room.id)"></div>
            <div class="room add"><i class="el-icon-plus"></i></div>
          </div>
        </el-main>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'record',
        roomArray: [{id: 1}, {id: 2}],
      };
    },
    components: {
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = keyPath[0]
      },
      /**
       * 跳转到对战房间
       * @param {number} id 房间的id号
       */
      toRoom (id) {
        this.$router.push({name: 'room', params: {id: id}})
      }
    }
  }
</script>


<style lang="stylus" scoped>
.home
  height 100%
  .el-header
    background #B3C0D1
    color #333
    line-height 60px
    display flex
    justify-content space-between

    .avatarWrap
      display flex
    .avatar
      height 100%
      border-radius 50%

  .el-main
    background #E9EEF3
    color #333
    height calc(100% - 60px)

    .roomWrap
      display flex
      flex-wrap wrap
      .room
        margin 5px 10px 
        width 60px
        height 80px
        line-height 80px
        text-align center
        border 1px solid #ccc

</style>