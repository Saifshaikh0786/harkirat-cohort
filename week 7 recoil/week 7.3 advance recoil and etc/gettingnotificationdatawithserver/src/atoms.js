

import axios from "axios";
import {atom , selector} from "recoil";

export const notifications=atom({
    key:"notifications",
    default:selector({
        key:"networkAtomSelector",
        get: async ()=> {
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const tn=selector({
    key:"tn",
    get:({get}) =>{
        const allnc=get(notifications);
        return allnc.network+allnc.jobs+allnc.messaging+allnc.notification

    }
})