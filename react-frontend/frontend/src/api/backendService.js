import axiosInstance from "./axiosConfig";

function getHomePageData() {
    let data = { message: "No data" };
    try {
        data = axiosInstance.get("/");
    }
    catch (error) {
        console.log(error);
    }
    return data;
}

export default getHomePageData;