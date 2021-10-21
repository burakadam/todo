import firebase from "../api/firebase";
let db = firebase.firestore();

async function getList(tag) {
  let returnData = [];

  const snapshot = await db.collection(tag).get();

  if (snapshot.empty) return false;

  snapshot.forEach((doc) => {
    returnData.push({ uid: doc.id, ...doc.data() });
  });

  return returnData;
}

async function addItem(tag, data) {
  try {
    const result = await db.collection(tag).add(data);
    const returnData = { ...data, uid: result.id };
    return returnData;
  } catch (error) {
    return false;
  }
}

async function updateItem(tag, id, data) {
  try {
    await db.collection(tag).doc(id).update(data);
    return data;
  } catch (error) {
    return false;
  }
}

async function deleteItem(tag, id) {
  try {
    await db.collection(tag).doc(id).delete();
    return true;
  } catch (error) {
    return false;
  }
}

export { getList, addItem, updateItem, deleteItem };
