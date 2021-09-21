import { BannerGen } from 'components/banner-gen';
import styles from './App.module.scss';
import { Header } from 'components/header';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.body}>
        <BannerGen />
      </div>

      <div className={styles.footer}>ETHOnline 2021 - suzamaki.eth</div>
    </div>
  );
}

export default App;
