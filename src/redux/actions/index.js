import { auth, provider } from "../../firebase";
import { ActionCodeOperation, signInWithPopup } from "firebase/auth";
import * as actions from "./actions";
import { storage } from "../../firebase";
import { ref } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
export function signAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
export function postArticleAPI(payload) {
  if (payload.image) {
    const storageRef = ref(storage, `images/${payload.image.name}`);
    const uploadRef = uploadBytesResumable(storageRef, payload.image);
    uploadRef.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
          const collRef = collection(db, "articles");
          addDoc(collRef, {
            actor: {
              userName: payload.user.displayName,
              userEmail: payload.user.email,
              userImg: payload.user.photoURL,
              date: payload.timestamp,
            },
            comment: 0,
            likes: 0,
            link: payload.url,
            image: downloadURl,
          });
        });
      }
    );
  } else if (payload.video) {
    const collRef = collection(db, "articles");
    addDoc(collRef, {
      actor: {
        userName: payload.user.displayName,
        userEmail: payload.user.email,
        userImg: payload.user.photoURL,
        date: payload.timestamp,
      },
      content: payload.content,
      comment: 0,
      likes: 0,
      link: payload.url,
      image: payload.image,
    });
  } else {
    const collRef = collection(db, "articles");
    addDoc(collRef, {
      actor: {
        userName: payload.user.displayName,
        userEmail: payload.user.email,
        userImg: payload.user.photoURL,
        date: payload.timestamp,
      },
      content: payload.content,
      comment: 0,
      likes: 0,
      link: payload.url,
      image: payload.image,
    });
  }
}
export function getArticlesAPI() {
  return (dispatch) => {
    dispatch(actions.setLoading(true))
    let payload;
    const collRef = collection(db, "articles");
    const orderedRef = query(collRef, orderBy("actor.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(actions.getArticles(payload));
    });
    dispatch(actions.setLoading(false))
  };
}
