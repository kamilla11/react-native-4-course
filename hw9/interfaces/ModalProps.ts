import Task from "../modals/Task.ts";
import {Modalize} from "react-native-modalize";
import React from "react";

export default interface ModalProps {
    modalizeRef: React.RefObject<Modalize>;
    data: Task[];
}
