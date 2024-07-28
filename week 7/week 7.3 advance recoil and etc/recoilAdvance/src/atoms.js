import {atom, selector} from 'recoil';

export const networkAtom=atom({
    key:"networkAtom",
    default:104
});

export const jobsAtom=atom({
    key:"jobsAtom",
    default:1000
});

export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
});

export const notificationAtom=atom({
    key:"notificationAtom",
    default:12
});

// selector is use to make use of the other atoms or we can say that which value depends on the othe stoms

export const tn=selector({
    key:"tn",
    get:({get})=>{
        const nc=get(networkAtom);
        const jc=get(jobsAtom);
        const mc=get(messagingAtom);
        const notc=get(notificationAtom);

        return nc+jc+mc+notc
    },
})