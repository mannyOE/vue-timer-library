<template>
  <div>
    <div :style="computedStyle" :class="size" class="timer-container">
      <div v-if="showMessage">
        <b v-if="direction == 'up'">Since</b>
        <b v-if="direction == 'down'">Until</b>
      </div>
      <table>
        <thead>
          <tr>
            <th width="30%">D</th>
            <th width="30%">H</th>
            <th width="25%">M</th>
            <th width="25%">S</th>
          </tr>
        </thead>
        <tr>
          <td>{{ days }}</td>
          <td>{{ hours }}</td>
          <td>{{ minutes }}</td>
          <td>{{ seconds }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg',
      validator: (size) => {
        return ['lg', 'md', 'sm', 'xs'].includes(size)
      },
    },
    direction: {
      type: String,
      enum: ['up', 'down'],
      default: 'up',
      validator: (dir) => {
        return ['up', 'down'].includes(dir)
      },
    },
    color: {
      type: String,
      default: '#fff',
    },
    showMessage: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: '#000',
    },
    borderColor: {
      type: String,
      default: '#000',
    },
    time: {
      type: Date,
      default: function() {
        return new Date()
      },
    },
  },
  data() {
    return {
      interval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      let now = new Date().getTime(),
        given = new Date(this.time).getTime()
      let diff = Math.abs(now - given),
        day = 24 * 60 * 60 * 1000,
        hour = 60 * 60 * 1000,
        minute = 60 * 1000,
        days = diff / day
      this.days = Math.floor(days)
      let remainHours = (days - this.days) * day,
        hours = remainHours / hour
      this.hours = Math.floor(hours)
      let remainMinutes = (hours - this.hours) * hour,
        minutes = remainMinutes / minute
      this.minutes = Math.floor(minutes)
      let remainSeconds = (minutes - this.minutes) * minute
      this.seconds = Math.floor(remainSeconds / 1000)
    },
  },
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.bg,
        color: this.color,
        border: '1px solid ' + this.borderColor,
      }
    },
  },
}
</script>

<style scoped>
.timer-container.sm {
  max-width: 110px;
}
.timer-container.md {
  max-width: 125px;
}

.timer-container.lg {
  max-width: 137px;
}

.timer-container.xs {
  max-width: 85px;
}

.timer-container.sm b {
  font-size: 11px;
}
.timer-container.md b {
  font-size: 13px;
}

.timer-container.lg b {
  font-size: 15px;
}

.timer-container.xs b {
  font-size: 9px;
}

.timer-container {
  border-radius: 10px;
  padding: 10px;
}
p {
  margin-top: 0px;
  margin-bottom: 0px;
}
td {
  text-align: center;
}
.lg td {
  margin-right: 10px;
  font-size: 15px;
}

.md td {
  margin-right: 8px;
  font-size: 13px;
}

.sm td {
  margin-right: 6px;
  font-size: 11px;
}

.xs td {
  margin-right: 4px;
  font-size: 8px;
}
</style>
