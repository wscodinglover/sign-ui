---
title: Color 色彩
group:
  title: Basic 基础组件
  order: 2
---

# Color 色彩

Sign UI 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受

## 主色

Sign UI 默认的主题色是明亮、友好的蓝色。

<div style="border-radius: 5px;width: 330px; height: 112px; color:#fff; background-color: #409EFF; display: grid; grid-template-rows: (repeat(3, 1fr)); grid-template-columns: repeat(6,1fr);">
  <div style="border-radius: 5px 5px 0 0;grid-column-start: span 6;padding-left: 20px; padding-top: 10px;">
    <b>Brand Color</b><br/>
    <span>#409EFF</span>
  </div>
  <div style="background-color: #337ecc"></div>
  <div style="background-color: #79bbff"></div>
  <div style="background-color: #a0cfff"></div>
  <div style="background-color: #c6e2ff"></div>
  <div style="background-color: #d9ecff"></div>
  <div style="background-color: #ecf5ff"></div>
</div>

## 辅助色

除了主颜色外，您需要在不同的场景中使用不同的场景颜色 (例如，危险的颜色表示危险的操作)

<div style="width: 850px; height: 112px; display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; color: #fff">
  <div style="border-radius: 5px; width: 193px; height: 112px; color:#fff; display: grid; grid-template-rows: (repeat(3, 1fr)); grid-template-columns: repeat(6,1fr);">
    <div style="border-radius: 5px 5px 0 0;grid-column-start: span 6;padding-left: 20px; padding-top: 10px; background: #67C23A;">
      <b>Success</b><br/>
      <span>#67C23A</span>
    </div>
    <div style="background-color: #529b2e"></div>
    <div style="background-color: #95d475"></div>
    <div style="background-color: #b3e19d"></div>
    <div style="background-color: #d1edc4"></div>
    <div style="background-color: #e1f3d8"></div>
    <div style="background-color: #f0f9eb"></div>
  </div>
  <div style="border-radius: 5px; width: 193px; height: 112px; color:#fff; display: grid; grid-template-rows: (repeat(3, 1fr)); grid-template-columns: repeat(6,1fr);">
    <div style="border-radius: 5px 5px 0 0;grid-column-start: span 6;padding-left: 20px; padding-top: 10px; background: #E6A23C;">
      <b>Warning</b><br/>
      <span>#E6A23C</span>
    </div>
    <div style="background-color: #b88230"></div>
    <div style="background-color: #eebe77"></div>
    <div style="background-color: #f3d19e"></div>
    <div style="background-color: #f8e3c5"></div>
    <div style="background-color: #faecd8"></div>
    <div style="background-color: #fdf6ec"></div>
  </div>
  <div style="border-radius: 5px;width: 193px; height: 112px; color:#fff; background-color: #409EFF; display: grid; grid-template-rows: (repeat(3, 1fr)); grid-template-columns: repeat(6,1fr);">
    <div style="border-radius: 5px 5px 0 0;grid-column-start: span 6;padding-left: 20px; padding-top: 10px; background: #F56C6C;">
      <b>Danger</b><br/>
      <span>#F56C6C</span>
    </div>
    <div style="background-color: #c45656"></div>
    <div style="background-color: #f89898"></div>
    <div style="background-color: #fab6b6"></div>
    <div style="background-color: #fcd3d3"></div>
    <div style="background-color: #fde2e2"></div>
    <div style="background-color: #fef0f0"></div>
  </div>
  <div style="border-radius: 5px;width: 193px; height: 112px; color:#fff; background-color: #409EFF; display: grid; grid-template-rows: (repeat(3, 1fr)); grid-template-columns: repeat(6,1fr);">
    <div style="border-radius: 5px 5px 0 0;grid-column-start: span 6;padding-left: 20px; padding-top: 10px; background: #909399;">
      <b>Info</b><br/>
      <span>#909399</span>
    </div>
    <div style="background-color: #73767a"></div>
    <div style="background-color: #b1b3b8"></div>
    <div style="background-color: #c8c9cc"></div>
    <div style="background-color: #dedfe0"></div>
    <div style="background-color: #e9e9eb"></div>
    <div style="background-color: #f4f4f5"></div>
  </div>
</div>

## 中性色

中性色用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。

<div style="display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;">
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #303133; color: #ffffff;">
    <b>Primary Text</b><br/>
    <span>#303133</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #CDD0D6; color: #303133;">
    <b>Darker Border</b><br/>
    <span>#CDD0D6</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #E6E8EB; color: #303133;">
    <b>Darker Fill</b><br/>
    <span>#E6E8EB</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #000000; color: #ffffff;">
    <b>Basic Black</b><br/>
    <span>#000000</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #606266; color: #ffffff;">
    <b>Regular Text</b><br/>
    <span>#606266</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #D4D7DE; color: #303133;">
    <b>Dark Border</b><br/>
    <span>#D4D7DE</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #EBEDF0; color: #303133;">
    <b>Dark Fill</b><br/>
    <span>#EBEDF0</span>
  </div>
  <div style="border: 1px soild #DCDFE6;border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #ffffff; color: #000000;">
    <b>Basic White</b><br/>
    <span>#ffffff</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #909399; color: #ffffff;">
    <b>Secondary Text</b><br/>
    <span>#909399</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #DCDFE6; color: #303133;">
    <b>Base Border</b><br/>
    <span>#DCDFE6</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #F0F2F5; color: #303133;">
    <b>Base Fill</b><br/>
    <span>#F0F2F5</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: transparent; color: #303133;">
    <b>Transparent</b><br/>
    <span>transparent</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #A8ABB2; color: #ffffff;">
    <b>Placeholder Text</b><br/>
    <span>#A8ABB2</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #E4E7ED; color: #303133;">
    <b>Light Border</b><br/>
    <span>#E4E7ED</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #F5F7FA; color: #303133;">
    <b>Light Fill</b><br/>
    <span>#F5F7FA</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #F2F3F5; color: #303133;">
    <b>Page Background</b><br/>
    <span>#F2F3F5</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #C0C4CC; color: #ffffff;">
    <b>Disabled Text</b><br/>
    <span>#C0C4CC</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #EBEEF5; color: #303133;">
    <b>Lighter Border</b><br/>
    <span>#EBEEF5</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FAFAFA; color: #303133;">
    <b>Lighter Fill</b><br/>
    <span>#FAFAFA</span>
  </div>
  <div style="border: 1px soild #DCDFE6;border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #303133;">
    <b>Base Background</b><br/>
    <span>#FFFFFF</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #ffffff;">
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #F2F6FC; color: #303133;">
    <b>Extra-light Border</b><br/>
    <span>#F2F6FC</span>
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FAFCFF; color: #303133;">
    <b>Extra-light Fill</b><br/>
    <span>#FAFCFF</span>
  </div>
  <div style="border: 1px soild #DCDFE6;border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #303133;">
    <b>Overlay Background</b><br/>
    <span>#FFFFFF</span>
  </div>

  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #ffffff;">
  </div>
  <div style="border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #ffffff;">
  </div>
  <div style="border: 1px soild #DCDFE6; border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #303133;">
    <b>Blank Fill</b><br/>
    <span>#FFFFFF</span>
  </div>
  <div style=" border-radius: 5px;padding-left: 20px; padding-top: 20px; height: 112px; background: #FFFFFF; color: #ffffff;">
  </div>
</div>
