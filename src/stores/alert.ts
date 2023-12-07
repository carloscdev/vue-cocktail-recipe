// Store with pinia for my alert

import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAlertStore = defineStore("alert", () => {
  const isOpen = ref(false);
  const message: Ref<string> = ref("");
  const type: Ref<"success" | "danger" | "warning"> = ref("success");

  const openAlert = (msg: string, typeAlert: "success" | "danger" | "warning") => {
    isOpen.value = false;
    message.value = msg;
    type.value = typeAlert;
    isOpen.value = true;
    closeAlert();
  }

  const closeAlert = () => {
    setTimeout(() => {
      isOpen.value = false;
    }, 3000);
  }

  return {
    isOpen,
    message,
    type,
    openAlert,
    closeAlert
  };
});