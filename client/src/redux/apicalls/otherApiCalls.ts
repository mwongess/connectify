import axios from "axios";
import { api } from "../../utils/domain";

export const getPosts = async () => {
  try {
    const { data } = await axios.get(api + "/posts/", {
      headers: {
        token: JSON.parse(localStorage.getItem("user")!),
      },
    });
    if (data.posts) {
      return data;
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// Messages
export const getMessages = async (senderID: string) => {
  try {
    const { data } = await axios.get(api + "/messages/" + senderID); // Replace with your API endpoint
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Friends
export const getFollowers = async () => {
  try {
    const { data } = await axios.get(api + "/friends/", {
      headers: {
        token: JSON.parse(localStorage.getItem("user")!),
      },
    });
    return data
  } catch (error) {}
};
