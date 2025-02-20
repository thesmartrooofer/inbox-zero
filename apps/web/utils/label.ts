import { messageVisibility } from "@/utils/gmail/constants";

export const PARENT_LABEL = "Inbox Zero";

const blue = "#b6cff5";
const cyan = "#98d7e4";
const purple = "#e3d7ff";
const pink = "#fbd3e0";
const red = "#f2b2a8";
const coral = "#ffc8af";
const orange = "#ffdeb5";
const yellow = "#fdedc1";
const green = "#b3efd3";

const LABEL_COLORS = [
  blue,
  cyan,
  purple,
  pink,
  red,
  coral,
  orange,
  yellow,
  green,
] as const;

export const inboxZeroLabels = {
  archived: {
    name: `${PARENT_LABEL}/Archived`,
    color: blue,
    messageListVisibility: messageVisibility.hide,
  },
  cold_email: {
    name: `${PARENT_LABEL}/Cold Email`,
    color: orange,
    messageListVisibility: messageVisibility.hide,
  },
  unsubscribed: {
    name: `${PARENT_LABEL}/Unsubscribed`,
    color: red,
    messageListVisibility: messageVisibility.hide,
  },
  processing: {
    name: `${PARENT_LABEL}/Processing`,
    color: yellow,
    messageListVisibility: messageVisibility.show,
  },
  assistant: {
    name: `${PARENT_LABEL}/Assistant`,
    color: purple,
    messageListVisibility: messageVisibility.show,
  },
} as const;

export type InboxZeroLabel = keyof typeof inboxZeroLabels;

export function getRandomLabelColor() {
  return LABEL_COLORS[Math.floor(Math.random() * LABEL_COLORS.length)];
}
