# vue-timer-library

This is a vuejs component to display a counter of the number of days, hours, minutes and seconds until/after a certain day.

## Installation

```bash
npm install simple-vue-timer
```

## Usage

```
import simpleVueTimer from 'simple-vue-timer'
 
Vue.component('svt', simpleVueTimer) 

in your components
<svt
  :size="'sm'"
  :borderColor="'#d50'"
  :direction="'up'"
  :color="'#fff'"
  :bg="'#43a'"
  :time="new Date('2020/05/17')"
/>
```

## Properties

| Paramter             | Description                                                       | Required | Default |
| -------------------- | ----------------------------------------------------------------- | -------- | ------- |
| size       | controls sizing of the rendered component: String. One of xs, sm, md, lg                            | false     | lg       |
| time    | a date object    : Date                                               | false     | new Date()       |
| bg | what background the rendered component will have: String | false     | #000      |
| color   | what color of text the rendered component will have: String       | false     | #fff    |
| borderColor                 | what color the border will have: String | false    | #000       |
| showMessage                 | whether to show simple message on the component: Boolean  | false    | false       |



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
