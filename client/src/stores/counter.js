import { defineStore } from "pinia";
export const useFetchStore = defineStore("fetch", {
    state: () => ({
        allmedi: [{
                id: 0,
                name: "พารา",
                price: 15,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://punsuk.com/2623-6737-thickbox_default/tylenol-paracetamol-500-100-.jpg",
            },
            {
                id: 1,
                name: "ทิงเจอร์ไทเมอรอซอล",
                price: 25,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://pornchaiinter.com/upload-img/pornchaiin/Drugs%2C_Vitamins_%26_Supplements_for_Animal/IODINE-TINCTURE__DR-AN-021-LW1D__.jpg",
            },
            {
                id: 2,
                name: "น้ำเกลือล้างแผล 1000มิลลิลิตร",
                price: 80,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg",
            },
            {
                id: 3,
                name: "น้ำเกลือล้างแผล 300มิลลิลิตร",
                price: 80,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg",
            },
            {
                id: 4,
                name: "น้ำเกลือล้างแผล 400มิลลิลิตร",
                price: 80,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://www.bcosmo.com/wp-content/uploads/2018/03/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD-klean-kare-1000-ml-2-1.jpg",
            },
            {
                id: 5,
                name: "ทิงเจอร์ไทเมอรอซอล",
                price: 25,
                quantity: 0,
                info: "lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum sit amet, consectet",
                amount: 100,
                type: "ยาสามัญประจำบ้าน",
                pic: "https://pornchaiinter.com/upload-img/pornchaiin/Drugs%2C_Vitamins_%26_Supplements_for_Animal/IODINE-TINCTURE__DR-AN-021-LW1D__.jpg",
            },
        ],

    }),
    actions: {
        async auth(jsonbrabra) {
            try {
                this.users = jsonbrabra;
            } catch (err) {
                console.error(err);
            }
        },
    },
});