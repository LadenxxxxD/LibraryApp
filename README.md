# AngularSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Ant Design For Angular

 [文档地址：https://ng.ant.design/docs/introduce/zh](https://ng.ant.design/docs/introduce/zh)

### 安装组件#

```bash
$ npm install ng-zorro-antd --save
```

### 引入样式#

#### 使用全部组件样式#

该配置将包含组件库的全部样式，如果只想使用某些组件请查看 [使用特定组件样式](https://ng.ant.design/docs/getting-started/zh#使用特定组件样式) 配置。

在 `angular.json` 中引入了

```json
{
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css"
  ]
}
```

在 `style.css` 中引入预构建样式文件

```css
@import "~ng-zorro-antd/ng-zorro-antd.min.css";
```

在 `style.less` 中引入 less 样式文件

```less
@import "~ng-zorro-antd/ng-zorro-antd.less";
```

#### 使用特定组件样式#

> 由于组件之间的样式也存在依赖关系，单独引入多个组件的 CSS 可能导致 CSS 的冗余。

使用特定组件样式时前需要先引入基本样式(所有组件的共用样式)。

在 `style.css` 中引入预构建样式文件

```css
@import "~ng-zorro-antd/style/index.min.css"; /* 引入基本样式 */
@import "~ng-zorro-antd/button/style/index.min.css"; /* 引入组件样式 */
```

在 `style.less` 中引入 less 样式文件

```less
@import "~ng-zorro-antd/style/entry.less"; /* 引入基本样式 */
@import "~ng-zorro-antd/button/style/entry.less"; /* 引入组件样式 */
```

### 引入组件模块#

最后你需要将想要使用的组件模块引入到你的 `app.module.ts` 文件和[特性模块](https://angular.cn/guide/feature-modules)中。

以下面的 `NzButtonModule` 模块为例，先引入组件模块：

```ts
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NzButtonModule
  ]
})
export class AppModule { }
```

然后在模板中使用：

```html
<button nz-button nzType="primary">Primary</button>
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
