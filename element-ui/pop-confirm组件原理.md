
# Popconfirm 气泡确认框


（1）父组件通过双向绑定传值给子组件，子组件props接收。

（2）子组件通过事件触发$emit通知父组件；父组件进而接收对应的参数。—— 典型的订阅发布模式。


## 父组件

```javascript
<template>
  <el-popconfirm
    confirmButtonText='确定'
    cancelButtonText='取消'
    icon="el-icon-info"
    iconColor="red"
    title="更新Token？"
    @onConfirm="refreshToken"
  >
    <el-button type="primary" slot="reference" style="border-radius: 4px">refreshToken</el-button>
  </el-popconfirm>
</template>
```

## 子组件
```javascript
export default {
  name: 'ElPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
```

# 参考

https://element.eleme.cn/#/zh-CN/component/popconfirm