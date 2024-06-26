import { themeSwitcher } from "@/assests/logic/script";
import ChatBotMessages from "@/components/app/chat-bot/chat/ChatBotMessages";
import BoxContainer from "@/components/app/main/BoxContainer";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Subscribe from "@/components/build/Subscribe";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const ChatBot = () => {
  const state = useSelector<AppState, AppState>((state) => state);

  useEffect(() => {
    themeSwitcher(state.theme);
  }, [state.theme]);

  return (
    <>
      <Header title="Aissa | Chat Bot" />

      <Base>
        <SearchBar />

        <Logo content="Chat bot [Alpha]" />

        <BaseWrapper>
          {state.switchBooleans.subscribeControl.isChatBotEnabled ? (
            <ChatBotMessages />
          ) : (
            <BoxContainer className="col-span-3">
              <Subscribe subscribeType="max" feature="Chat Bot" />
            </BoxContainer>
          )}
        </BaseWrapper>

        {state.switchBooleans.websiteControl.isNotificationActive && (
          <ToastContainer position="top-center" theme={state.theme} />
        )}
      </Base>
    </>
  );
};

export default ChatBot;
