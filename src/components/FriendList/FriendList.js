import { FriendItem } from '../FriendItem/FriendItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(item => (
        <FriendItem
          key={item.id}
          avatarUrl={item.avatar}
          name={item.name}
          status={item.isOnline === true ? 'online' : 'offline'}
          variant="error"
        />
      ))}
    </ul>
  );
};
