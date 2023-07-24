import axios from "axios";
import { api } from "../../utils/domain";

// Fetch all the posts
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
// Create a new post
export const savePost = async (content: string) => {
  try {
    const { data } = await axios.post(
      api + "/posts/new",
      { content: content, imgUrl: "https://example.jpg" },
      {
        headers: {
          token: JSON.parse(localStorage.getItem("user")!),
        },
      }
    );
    return data
  } catch (error) {
    console.error("error");
  }
};
// Comments //
export const getPostComments = async (postID: string) => {
  try {
    const { data } = await axios.get(api + "/comments/" + postID, {
      headers: {
        token: JSON.parse(localStorage.getItem("user")!),
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const saveComment = async (postID: string, commentText: string) => {
  try {
    const { data } = await axios.post(
      api + "/comments/" + postID + "/new",
      { commentText: commentText },
      {
        headers: {
          token: JSON.parse(localStorage.getItem("user")!),
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Messages
export const getMessages = async (senderID: string) => {
  try {
    const { data } = await axios.get(api + "/messages/" + senderID);
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
    return data;
  } catch (error) {}
};

// All users
export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(api + "/users", {
      headers: {
        token: JSON.parse(localStorage.getItem("user")!),
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
