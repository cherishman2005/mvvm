
# element-ui select选择器

el-select可选择可输入

```javascript
<el-select v-model="appid" placeholder="appid" filterable @blur="selectBlur">
  <el-option
    v-for="item in appids"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>

methods: {
  selectBlur(e) {
    this.appid = e.target.value;
  }
}
```

# 参考

https://element.eleme.cn/#/zh-CN/component/select
