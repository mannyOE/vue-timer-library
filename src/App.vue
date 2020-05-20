<template>
  <div id="app">
    <center>
      <svt
        :size="'sm'"
        :borderColor="'#d50'"
        :direction="'up'"
        :color="'#fff'"
        :bg="'#43a'"
        :time="new Date('2020/05/17')"
      />
    </center>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TimerComponent from './TimerComponent'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TimerComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
