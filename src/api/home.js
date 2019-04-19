import {http} from "@/utils/http";

export const getSwiperImg = () => http("GET","/api/event/GetMbBannerList")