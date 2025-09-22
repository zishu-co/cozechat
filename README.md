由于扣子并没有提供如dify那样的一键生成聊天页面的功能，因此需要我们自己开发聊天页面。
本指南创作于 2025年9月19日，如果你看到的时候已经过去很久了，请修改dependencies中的版本号，以适应最新版本。

运行本项目之前，请确保已经把coze-studio跑起来了，并且已经发布到ChatSDK。我们需要先获取botID和个人令牌。

### 获取智能体ID
进入智能体的开发页面，开发页面 URL 中 bot 参数后的数字就是智能体ID。例如 https://www.coze.com/space/341****/bot/73428668*****，智能体 ID 为 73428668*****。
确保调用该接口使用的令牌开通了此智能体所在空间的权限。
确保该智能体已发布为 API 服务。

### 获取访问令牌
Coze Studio 社区版 API 和 Chat SDK 通过个人访问令牌鉴权。调用 API 之前，你需要先获得访问令牌。

调用扣子 API 时，你需要在 Header 中通过 Authorization 参数指定访问令牌（Access token），扣子服务端会根据访问令牌验证调用方的操作权限。

获取访问令牌的操作步骤如下：

登录 Coze Studio 社区版。

在页面左下角单击个人头像，并选择 API 授权。

在个人访问令牌页面中，单击添加新令牌。

在弹出的页面完成以下配置，然后单击确定。

配置项	说明
名称	个人访问令牌的名称。
过期时间	个人访问令牌的有效期时长。令牌过期后将会失效，无法继续用它来调用扣子 API。
生成令牌后，无法修改过期时间。所以过期时间可以设得长一些，比如说五年后。

复制并妥善保存个人访问令牌。 生成的令牌仅在此时展示一次，请即刻复制并保存。

## 1. 安装 Node.js

首先需要安装 Node.js，它包含了 npm（Node Package Manager）：

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS（长期支持）版本
3. 运行安装程序，按照提示完成安装
4. 安装完成后，打开终端/命令提示符，验证安装：
   ```bash
   node --version
   npm --version
   ```
   
## 2. 克隆本项目
```bash
git clone https://github.com/zishu-co/cozechat.git
```

## 3. 安装依赖
进入本项目文件夹，安装依赖
```bash
cd cozechat
npm install
```

## 4. 填写必要的环境信息
需要准备三个信息：
1、扣子在本地运行的baseurl，例如 http://192.168.0.123:8888
2、智能体ID，例如 7550598865406132224
3、个人令牌，以pat_开头，例如 pat_a2fb1e1f85ca...

把根目录下的 .env.example 改名为 .env

然后填入自己的 BaseUrl 和 个人令牌

## 5. 修改主页 src/pages/Home.tsx 中的链接信息

```html
<div>
  <h1>首页</h1>
  <p><Link to="/agent/7550884491460345856">智能客服</Link></p>
  <p><Link to="/agent/7550598865406132224">文件名检查</Link></p>
</div>
```

把这里面的/agent/ 后面的数字改成自己的智能体ID。

## 6. 启动项目

```bash
npm run dev
```

项目会在 8088 端口运行，例如 localhost:8088

其实浏览器地址栏里的智能体id可以任意输入的，比如在coze-studio里又新建了一个智能体，只需要把智能体id拼接到/agent/ 后面，然后贴到浏览器地址栏里即可访问新的智能体。
例如localhost:8088/agent/新的智能体ID

本项目仅仅是做了一些简单的封装。如果想要从零搭建起来，可以参考下面的步骤：

## 1. 安装 Node.js

首先需要安装 Node.js，它包含了 npm（Node Package Manager）：

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS（长期支持）版本
3. 运行安装程序，按照提示完成安装
4. 安装完成后，打开终端/命令提示符，验证安装：
   ```bash
   node --version
   npm --version
   ```

## 2. 创建 Vite React TypeScript 项目


1. 打开终端/命令提示符，导航到你想要创建项目的目录

2. 使用以下命令创建项目：
   ```bash
   npm create vite@latest chatpage -- --template react-ts
   ```

3. 进入项目目录：
   ```bash
   cd chatpage
   ```

4. 安装依赖：
因为 @coze/chat-sdk 需要 React 18.2.0，所以需要把我们的 React版本调整成18.2.0

修改 package.json里的dependencies的字段，直接复制粘贴下面这段即可。
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@coze/chat-sdk": "^0.1.11-beta.19"
  }
}
```
然后输入安装命令
   ```bash
   npm install
   ```

## 3. 运行开发服务器

启动开发服务器：
```bash
npm run dev
```

项目将在 `http://localhost:5173` 运行。

## 4. 项目结构说明

创建的项目包含以下主要文件和目录：

```
chatpage/
├── node_modules/          # 项目依赖
├── public/               # 静态资源
├── src/
│   ├── assets/           # 图片等资源
│   ├── App.css          # 主应用样式
│   ├── App.tsx          # 主应用组件
│   ├── index.css        # 全局样式
│   ├── main.tsx         # 应用入口点
│   └── vite-env.d.ts    # Vite 类型定义
├── index.html           # HTML 模板
├── package.json         # 项目配置和依赖
├── tsconfig.json        # TypeScript 配置
├── tsconfig.node.json   # Node.js 的 TypeScript 配置
└── vite.config.ts       # Vite 构建工具配置
```


## 5. 开始编写聊天页面
打开这个页面，
https://www.npmjs.com/package/@coze/chat-sdk

在这个页面去找到 Quick Start / 2.1 Basic Usage For Agent / For Web

把整个代码块都拷贝下来，全都复制到src/App.tsx这个文件里。

1. 打开 `src/App.tsx` 文件
2. 把原来的代码都删掉，改为以下内容：
```tsx
import "@coze/chat-sdk/webCss";
import ChatSdk from "@coze/chat-sdk/webJs";
const { ChatFramework, ChatSlot, ChatType, Language } = ChatSdk;

export default function Index() {
  return (
    <div className="height-100">
      <ChatFramework
        chat={{
          appId: "7329529575539572743",
          type: ChatType.Bot,
        }}
        setting={{
          apiBaseUrl: "https://api.coze.cn",
          language: Language.EN,
          requestHeader: {},
          logLevel: "debug",
        }}
        auth={{
          token: "##############",
          onRefreshToken: (oldToken) => {
            return "##############";
          },
        }}
        user={{
          id: "UserId123",
          name: "Mr.XXX",
          avatar:
            "https://sf16-passport-sg.ibytedtos.com/obj/user-avatar-alisg/e0622b06d99df6ead022ca4533ca631f.png",
        }}
      >
        <ChatSlot className={"chat-slot"} />
      </ChatFramework>
    </div>
  );
}
```
3. 按需修改
最关键的是改里面的四个东西：

1、第10行的appId: "7329529575539572743"
这就是智能体ID。进入智能体的开发页面，开发页面 URL 中 bot 参数后的数字就是智能体ID。例如 https://www.coze.com/space/341****/bot/73428668*****，智能体 ID 为 73428668*****。

2、第14行的apiBaseUrl: "https://api.coze.cn"。
把它改成本地扣子部署的地址。例如 http://192.168.0.123:8888

3、第20行的token: "##############" 和 第22行的return "##############"
把其中的"##############" 改为 个人令牌。

4、第5行的export default function Index() 改成
export default function App()

4. 保存文件后，浏览器中的内容会自动更新

现在开始愉快地跟本地部署的扣子智能体对话吧！

## 6. 其他自定义项

聊天页面还有其他很多可以自定义的地方，比如页眉、页脚、logo等等。具体可以参见
https://www.npmjs.com/package/@coze/chat-sdk
的 3. Parameters Description


