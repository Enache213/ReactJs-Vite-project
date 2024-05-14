import LeftSide from './LeftSide';
import RightSide from './RightSide';
import NewsFeed from './NewsFeed';
import styles from './StartingPage.module.scss'

function StartingPage() {
  return (
    <div className="startingPage">
      <LeftSide />
      <RightSide />
      <NewsFeed />
    </div>
  );
}
export default StartingPage;