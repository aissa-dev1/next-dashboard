import { BotMessage, BotMessageType } from "../../types/main";
import toggleThemeAction from "@/redux/actions/toggle_actions/toggleThemeAction";
import sendChatBotMessageAction from "@/redux/actions/add_actions/sendChatBotMessageAction";
import clearChatBotAction from "@/redux/actions/main_actions/clearChatBotAction";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

export function botMessage(
  content: string,
  { state, dispatch, router }: BotMessage
): BotMessageType {
  const message = content.toLowerCase();
  let messageType: BotMessageType = "unknown";

  if (message.startsWith("qs:")) messageType = "question";

  if (message.startsWith("do:")) messageType = "actions";

  if (message.startsWith("sh:")) messageType = "sayHello";

  if (messageType === "unknown") {
    dispatch(
      sendChatBotMessageAction({
        content: "Sorry but i didn't understand.",
        isBotMessage: true,
      })
    );
    dispatch(
      sendChatBotMessageAction({
        content: `Your message ${content} does not match any messages types that i know you can use this flags (qs: | do: | sh:)`,
        isBotMessage: true,
      })
    );
    return messageType;
  }

  const messagePrefix = message.slice(0, 3);

  if (messageType === "question") {
    switch (message) {
      case `${messagePrefix} what is your name`:
      case `${messagePrefix} what is your name.`:
      case `${messagePrefix} what is your name?`:
      case `${messagePrefix} what is your name!`:
      case `${messagePrefix} what's your name`:
      case `${messagePrefix} what's your name.`:
      case `${messagePrefix} what's your name?`:
      case `${messagePrefix} what's your name!`:
        dispatch(
          sendChatBotMessageAction({
            content: "Thanks for asking, my name is chat-bot.",
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} what is my name`:
      case `${messagePrefix} what is my name.`:
      case `${messagePrefix} what is my name?`:
      case `${messagePrefix} what is my name!`:
      case `${messagePrefix} what's my name`:
      case `${messagePrefix} what's my name?`:
      case `${messagePrefix} what's my name!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Your name is ${state.information.generalInfo.firstName} ${state.information.generalInfo.lastName}.`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} who are you`:
      case `${messagePrefix} who are you.`:
      case `${messagePrefix} who are you?`:
      case `${messagePrefix} who are you!`:
        dispatch(
          sendChatBotMessageAction({
            content: "I'am a computer programe.",
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} who made you`:
      case `${messagePrefix} who made you.`:
      case `${messagePrefix} who made you?`:
      case `${messagePrefix} who made you!`:
        dispatch(
          sendChatBotMessageAction({
            content: "@Aissa Bedr.",
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} aissa bedr`:
      case `${messagePrefix} aissa bedr.`:
      case `${messagePrefix} aissa bedr?`:
      case `${messagePrefix} aissa bedr!`:
      case `${messagePrefix} aissa`:
      case `${messagePrefix} aissa.`:
      case `${messagePrefix} aissa?`:
      case `${messagePrefix} aissa!`:
      case `${messagePrefix} who is aissa bedr`:
      case `${messagePrefix} who is aissa bedr.`:
      case `${messagePrefix} who is aissa bedr?`:
      case `${messagePrefix} who is aissa bedr!`:
        dispatch(
          sendChatBotMessageAction({
            content:
              "@Aissa Bedr is A web developer he has 17 years old, he loves his work and spends most of his time writing code. His best programming language is Typescript.",
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} how old are you`:
      case `${messagePrefix} how old are you.`:
      case `${messagePrefix} how old are you?`:
      case `${messagePrefix} how old are you!`:
        dispatch(
          sendChatBotMessageAction({
            content: "Sorry but as a computer programe i don't have age.",
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} how are you`:
      case `${messagePrefix} how are you.`:
      case `${messagePrefix} how are you?`:
      case `${messagePrefix} how are you!`:
        dispatch(
          sendChatBotMessageAction({
            content:
              "Sorry but as a computer programe i don't have feelings but my maker (@Aissa Bedr) are fine.",
            isBotMessage: true,
          })
        );
        break;

      default:
        dispatch(
          sendChatBotMessageAction({
            content: "Sorry but i didn't match your question.",
            isBotMessage: true,
          })
        );
    }
    return messageType;
  }

  if (messageType === "actions") {
    switch (message) {
      case `${messagePrefix} change the theme`:
      case `${messagePrefix} change theme`:
      case `${messagePrefix} toggle the theme`:
      case `${messagePrefix} toggle theme`:
        dispatch(toggleThemeAction());
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} clear the chat`:
      case `${messagePrefix} clear chat`:
      case `${messagePrefix} clear`:
      case `${messagePrefix} clean the chat`:
      case `${messagePrefix} clean chat`:
      case `${messagePrefix} clean`:
      case `${messagePrefix} new chat`:
      case `${messagePrefix} new`:
      case `${messagePrefix} exit`:
        dispatch(clearChatBotAction());
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - home`:
      case `${messagePrefix} change link - home`:
      case `${messagePrefix} change the link home`:
      case `${messagePrefix} change link home`:
      case `${messagePrefix} change the link /home`:
      case `${messagePrefix} change link /home`:
        dispatch(changeLinkAction("dashboard"));
        router.push("/");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - dashboard`:
      case `${messagePrefix} change link - dashboard`:
      case `${messagePrefix} change the link dashboard`:
      case `${messagePrefix} change link dashboard`:
      case `${messagePrefix} change the link /dashboard`:
      case `${messagePrefix} change link /dashboard`:
        dispatch(changeLinkAction("dashboard"));
        router.push("/dashboard");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - settings`:
      case `${messagePrefix} change link - settings`:
      case `${messagePrefix} change the link settings`:
      case `${messagePrefix} change link settings`:
      case `${messagePrefix} change the link /settings`:
      case `${messagePrefix} change link /settings`:
        dispatch(changeLinkAction("settings"));
        router.push("/settings");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - profile`:
      case `${messagePrefix} change link - profile`:
      case `${messagePrefix} change the link profile`:
      case `${messagePrefix} change link profile`:
      case `${messagePrefix} change the link /profile`:
      case `${messagePrefix} change link /profile`:
        dispatch(changeLinkAction("profile"));
        router.push("/profile");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - business`:
      case `${messagePrefix} change link - business`:
      case `${messagePrefix} change the link business`:
      case `${messagePrefix} change link business`:
      case `${messagePrefix} change the link /business`:
      case `${messagePrefix} change link /business`:
        dispatch(changeLinkAction("business"));
        router.push("/business");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - courses`:
      case `${messagePrefix} change link - courses`:
      case `${messagePrefix} change the link courses`:
      case `${messagePrefix} change link courses`:
      case `${messagePrefix} change the link /courses`:
      case `${messagePrefix} change link /courses`:
        dispatch(changeLinkAction("courses"));
        router.push("/courses");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - friends`:
      case `${messagePrefix} change link - friends`:
      case `${messagePrefix} change the link friends`:
      case `${messagePrefix} change link friends`:
      case `${messagePrefix} change the link /friends`:
      case `${messagePrefix} change link /friends`:
        dispatch(changeLinkAction("friends"));
        router.push("/friends");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - plans`:
      case `${messagePrefix} change link - plans`:
      case `${messagePrefix} change the link plans`:
      case `${messagePrefix} change link plans`:
      case `${messagePrefix} change the link /plans`:
      case `${messagePrefix} change link /plans`:
        dispatch(changeLinkAction("plans"));
        router.push("/plans");
        dispatch(
          sendChatBotMessageAction({ content: "Done.", isBotMessage: true })
        );
        break;

      case `${messagePrefix} change the link - chat-bot`:
      case `${messagePrefix} change link - chat-bot`:
      case `${messagePrefix} change the link chat-bot`:
      case `${messagePrefix} change link chat-bot`:
      case `${messagePrefix} change the link /chat-bot`:
      case `${messagePrefix} change link /chat-bot`:
        dispatch(
          sendChatBotMessageAction({
            content: "This is your current link.",
            isBotMessage: true,
          })
        );
        break;

      default:
        dispatch(
          sendChatBotMessageAction({
            content: "Sorry but i didn't match your action.",
            isBotMessage: true,
          })
        );
    }
    return messageType;
  }

  if (messageType === "sayHello") {
    switch (content) {
      case `${messagePrefix} bot`:
      case `${messagePrefix} bot.`:
      case `${messagePrefix} bot!`:
      case `${messagePrefix} chat bot`:
      case `${messagePrefix} chat bot.`:
      case `${messagePrefix} chat bot!`:
      case `${messagePrefix} chat-bot`:
      case `${messagePrefix} chat-bot.`:
      case `${messagePrefix} chat-bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Yes ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} welcome`:
      case `${messagePrefix} welcome.`:
      case `${messagePrefix} welcome!`:
      case `${messagePrefix} welcome there`:
      case `${messagePrefix} welcome there.`:
      case `${messagePrefix} welcome there!`:
      case `${messagePrefix} welcome bot`:
      case `${messagePrefix} welcome bot.`:
      case `${messagePrefix} welcome bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Welcome ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} hello`:
      case `${messagePrefix} hello.`:
      case `${messagePrefix} hello!`:
      case `${messagePrefix} hello there`:
      case `${messagePrefix} hello there.`:
      case `${messagePrefix} hello there!`:
      case `${messagePrefix} hello bot`:
      case `${messagePrefix} hello bot.`:
      case `${messagePrefix} hello bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Hello ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} hallo`:
      case `${messagePrefix} hallo.`:
      case `${messagePrefix} hallo!`:
      case `${messagePrefix} hallo there`:
      case `${messagePrefix} hallo there.`:
      case `${messagePrefix} hallo there!`:
      case `${messagePrefix} hallo bot`:
      case `${messagePrefix} hallo bot.`:
      case `${messagePrefix} hallo bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Hallo ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} hi`:
      case `${messagePrefix} hi.`:
      case `${messagePrefix} hi!`:
      case `${messagePrefix} hi there`:
      case `${messagePrefix} hi there.`:
      case `${messagePrefix} hi there!`:
      case `${messagePrefix} hi bot`:
      case `${messagePrefix} hi bot.`:
      case `${messagePrefix} hi bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Hi ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} hey`:
      case `${messagePrefix} hey.`:
      case `${messagePrefix} hey!`:
      case `${messagePrefix} hey there`:
      case `${messagePrefix} hey there.`:
      case `${messagePrefix} hey there!`:
      case `${messagePrefix} hey bot`:
      case `${messagePrefix} hey bot.`:
      case `${messagePrefix} hey bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Hey ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} good morning`:
      case `${messagePrefix} good morning.`:
      case `${messagePrefix} good morning!`:
      case `${messagePrefix} good morning there`:
      case `${messagePrefix} good morning there.`:
      case `${messagePrefix} good morning there!`:
      case `${messagePrefix} good morning bot`:
      case `${messagePrefix} good morning bot.`:
      case `${messagePrefix} good morning bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Good morning ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} good afternoon`:
      case `${messagePrefix} good afternoon.`:
      case `${messagePrefix} good afternoon!`:
      case `${messagePrefix} good afternoon there`:
      case `${messagePrefix} good afternoon there.`:
      case `${messagePrefix} good afternoon there!`:
      case `${messagePrefix} good afternoon bot`:
      case `${messagePrefix} good afternoon bot.`:
      case `${messagePrefix} good afternoon bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `Good afternoon ${state.information.generalInfo.firstName} how can i help you ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} thank you`:
      case `${messagePrefix} thank you.`:
      case `${messagePrefix} thank you!`:
      case `${messagePrefix} thank you there`:
      case `${messagePrefix} thank you there.`:
      case `${messagePrefix} thank you there!`:
      case `${messagePrefix} thank you bot`:
      case `${messagePrefix} thank you bot.`:
      case `${messagePrefix} thank you bot!`:
      case `${messagePrefix} thanks`:
      case `${messagePrefix} thanks.`:
      case `${messagePrefix} thanks!`:
      case `${messagePrefix} thanks there`:
      case `${messagePrefix} thanks there.`:
      case `${messagePrefix} thanks there!`:
      case `${messagePrefix} thanks bot`:
      case `${messagePrefix} thanks bot.`:
      case `${messagePrefix} thanks bot!`:
      case `${messagePrefix} tnx`:
      case `${messagePrefix} tnx.`:
      case `${messagePrefix} tnx!`:
      case `${messagePrefix} tnx there`:
      case `${messagePrefix} tnx there.`:
      case `${messagePrefix} tnx there!`:
      case `${messagePrefix} tnx bot`:
      case `${messagePrefix} tnx bot.`:
      case `${messagePrefix} tnx bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `any time ${state.information.generalInfo.firstName}, Is there anything else I can help you with ?`,
            isBotMessage: true,
          })
        );
        break;

      case `${messagePrefix} bey`:
      case `${messagePrefix} bey.`:
      case `${messagePrefix} bey!`:
      case `${messagePrefix} bey there`:
      case `${messagePrefix} bey there.`:
      case `${messagePrefix} bey there!`:
      case `${messagePrefix} bey bot`:
      case `${messagePrefix} bey bot.`:
      case `${messagePrefix} bey bot!`:
        dispatch(
          sendChatBotMessageAction({
            content: `see you ${state.information.generalInfo.firstName}, When you need me send a message.`,
            isBotMessage: true,
          })
        );
        break;

      default:
        dispatch(
          sendChatBotMessageAction({
            content: "Sorry but i didn't match your sayHello.",
            isBotMessage: true,
          })
        );
    }
    return messageType;
  }

  return messageType;
}
