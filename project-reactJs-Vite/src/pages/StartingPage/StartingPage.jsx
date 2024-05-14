import LeftSide from './LeftSide';
import RightSide from './RightSide';
import NewsFeed from './NewsFeed';
import styles from './StartingPage.module.scss'

function StartingPage() {
  return (
    <div className={styles.startingPage}>
    <aside><LeftSide /></aside>  

      <aside><RightSide /></aside>
      <NewsFeed />
    </div>
  );
}
export default StartingPage;