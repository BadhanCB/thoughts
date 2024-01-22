import { IoMoon, IoSunny } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import styles from './themeToggle.module.css';

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <IoSunny />
      <FaCircle className={styles.themeTogglerCircle} />
      <IoMoon />
    </div>
  )
}

export default ThemeToggle;