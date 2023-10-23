import store from "..";
import {_setModal, _removeModal} from ".";

export const setModal = (data) => store.dispatch(_setModal(data));
export const removeModal = () => store.dispatch(_removeModal());
