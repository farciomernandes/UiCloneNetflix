import firebasemock from 'firebase-mock';

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mockmessaging = new firebasemock.MockMessaging();

const mocksdk = new firebasemock.MockFirebaseSdk(
    (path) => {
      return path ? mockdatabase.child(path) : mockdatabase;
    },
    () => {
      return mockauth;
    },
    () => {
      return null;
    },
    () => {
      return null;
    },
    () => {
      return null;
    }
  );

  export default mockauth;