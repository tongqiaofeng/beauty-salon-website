import {
  Button,
  Select,
  Option,
  Carousel,
  CarouselItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Pagination,
  Row,
  Col,

  Message,
  MessageBox,
  Notification,

} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Input)
    Vue.use(Pagination)
    Vue.use(Row)
    Vue.use(Col)

    Vue.prototype.$message = Message;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$notify = Notification;

  }
}

export default element