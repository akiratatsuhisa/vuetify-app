import { AxiosInstance } from "axios";
import { Manager, Socket } from "socket.io-client";
import { InjectionKey, Ref } from "vue";

import { IRoomMemberResponse, IRoomResponse } from "./interfaces/rooms";

export namespace KEYS {
  export const AXIOS: InjectionKey<AxiosInstance> = Symbol("axios");

  export const MANAGER_SOCKETS: InjectionKey<Manager> =
    Symbol("manager:sockets");
  export const SOCKET_CHAT: InjectionKey<Ref<Socket>> = Symbol("socket:chat");
  export namespace DRAWER {
    export const SHOW: InjectionKey<Ref<boolean | null>> =
      Symbol("drawer:show");
    export const ROOMS: InjectionKey<Readonly<Ref<Array<IRoomResponse>>>> =
      Symbol("drawer:rooms");
    export const UPDATE_ROOMS: InjectionKey<
      (data: Array<IRoomResponse>) => void
    > = Symbol("drawer:updateRooms");
  }
  export namespace SNACKBAR {
    export const QUEUE: InjectionKey<Array<object>> = Symbol("snackbar:queue");
    export const CURRENT: InjectionKey<Ref<object>> =
      Symbol("snackbar:current");
    export const SHOW: InjectionKey<Ref<boolean>> = Symbol("snackbar:show");
  }

  export namespace CHAT {
    export const ROOM: InjectionKey<Ref<IRoomResponse | undefined>> =
      Symbol("chat:room");
    export const CURRENT_MEMBER: InjectionKey<
      Readonly<Ref<IRoomMemberResponse | undefined>>
    > = Symbol("chat:currentMember");
  }
}
