import { getDoc, doc } from 'firebase/firestore/lite';
import { db } from '../../../firebase';

const HomePage = () => {
  const nickname = 'kDZefLkcRiPOZoCaDRII';

  const getDiaries = async (nickname: string) => {
    const diaries = doc(db, 'diaries', nickname);
    const diariesSnapshot = await getDoc(diaries);
    console.log(1);

    if (!diariesSnapshot.exists()) {
      return null;
    }
    console.log(diariesSnapshot.data());

    return diariesSnapshot.data();
  };

  // const addComment = (nickname, comment) => {
  //   const commentRef = doc(db, 'diaries', nickname);
  //   setDoc(commentRef, comment, { merge: true });
  // };

  return (
    <div>
      <button onClick={() => getDiaries(nickname)}>조회</button>
    </div>
  );
};

export default HomePage;
