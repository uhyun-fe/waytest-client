import axios from "axios";

const WAYTEST_SERVER_URI = "https://waytest-server.herokuapp.com/";
// const WAYTEST_SERVER_URI = "http://localhost:8095/";

export const getVisitCount = () => axios.get(WAYTEST_SERVER_URI);
export const updateVisitCount = () => axios.put(WAYTEST_SERVER_URI + "count");
