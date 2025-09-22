import React from 'react'
import "@coze/chat-sdk/webCss";
import ChatSdk from "@coze/chat-sdk/webJs";
const { ChatFramework, ChatSlot, ChatType, Language } = ChatSdk;

const baseUrl = import.meta.env.VITE_BaseUrl
const TOKEN = import.meta.env.VITE_TOKEN
// 定义组件接收的 props 类型
interface ChatpageProps {
  id: string | number
  // 可以添加其他需要的 props
  // title?: string
  // onMessage?: (message: string) => void
}

const Chatpage: React.FC<ChatpageProps> = ({ id }) => {
  return (
    <div className="height-100">
      <ChatFramework
        chat={{
            appId: id,
            type: ChatType.Bot,
        }}
        setting={{
          apiBaseUrl: baseUrl,
          language: Language.EN,
          requestHeader: {},
          logLevel: "debug",
        }}
        auth={{
          token: TOKEN,
          onRefreshToken: (oldToken) => {
            return TOKEN;
          },
        }}
        user={{
          id: "UserId123",
          name: "我",
          avatar:
            "https://sf16-passport-sg.ibytedtos.com/obj/user-avatar-alisg/e0622b06d99df6ead022ca4533ca631f.png",
        }}
      >
        <ChatSlot className={"chat-slot"} />
      </ChatFramework>
    </div>
  )
}

export default Chatpage