import axios from "axios";
import { types } from "../constants/types";

export const checkEmail = (email, op) => {
    let response;
    if (op == types.SIGNIN) {
        response = {
            error: false,
            message: null
        }
        return response;
    } else if (op == types.SIGNUP) {

    }
}

export const checkUsername = () => {}

export const checkPassword = () => {}
