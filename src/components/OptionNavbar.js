import { useEffect } from "react";
import styles from "./OptionNavbar.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

function OptionNavbar() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/751f9f0d3e.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.logo}>
          <Link className={styles.navLink}>
            <span className={`${styles.linkText} ${styles.logoText}`}>
              lookingFor
            </span>
            <svg
              className={styles.faPrimary}
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </Link>
        </li>

        <li class={styles.navItem}>
          <Link className={styles.navLink}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users"
              class="svg-inline--fa fa-users"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
              ></path>
            </svg>
            <span class={styles.linkText}>groups/chats</span>
          </Link>
        </li>

        <li class={styles.navItem}>
          <Link className={styles.navLink} to="/Sport">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="volleyball"
              class="svg-inline--fa fa-volleyball"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M200.3 106C185.4 80.24 165.2 53.9 137.4 29.26C55.75 72.05 0 157.4 0 256c0 21.33 2.898 41.94 7.814 61.75C53.59 182.1 155.1 124.9 200.3 106zM381.7 281.1c1.24-9.223 2.414-22.08 2.414-37.65c0-59.1-16.93-157.2-111.5-242.6C267.1 .4896 261.6 0 256 0C225.5 0 196.5 5.591 169.4 15.36c93.83 90.15 102.6 198.5 102.8 231.7C287.8 255.9 327.3 275.1 381.7 281.1zM240.1 246.5C239.1 228.5 236.9 184.7 214.9 134.6C173.6 151.6 60.4 211.7 26.67 369.2c15.66 31.64 37.52 59.66 64.22 82.23C122 325.1 211.5 263.3 240.1 246.5zM326.5 10.07c74.79 84.9 89.5 175.9 89.5 234c0 15.45-1.042 28.56-2.27 38.61l.5501 .0005c29.54 0 62.2-4.325 97.16-15.99C511.6 263.1 512 259.6 512 256C512 139.1 433.6 40.72 326.5 10.07zM255.7 274.5c-15.43 9.086-51.89 33.63-84.32 77.86c26.34 20.33 93.51 63.27 189.5 63.27c32.83 0 69.02-5.021 108.1-17.69c19.08-28.59 32.41-61.34 38.71-96.47C474.5 311.1 443 315 414.4 315C334.6 315 276.5 286.3 255.7 274.5zM153.1 379.3c-14.91 25.71-27.62 56.33-35.03 92.72C158.6 497.2 205.5 512 256 512c69 0 131.5-27.43 177.5-71.82c-25.42 5.105-49.71 7.668-72.38 7.668C258.6 447.8 185.5 402.1 153.1 379.3z"
              ></path>
            </svg>
            <span class={styles.linkText}>Sport</span>
          </Link>
        </li>

        <li class={styles.navItem}>
          <Link className={styles.navLink} to="Party">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="champagne-glasses"
              class="svg-inline--fa fa-champagne-glasses"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M639.4 433.6c-8.374-20.37-31.75-30.12-52.12-21.62l-22.12 9.249l-38.75-101.1c47.87-34.1 64.87-100.2 34.5-152.7l-86.62-150.5c-7.999-13.87-24.1-19.75-39.1-13.62l-114.2 47.37L205.8 2.415C190.8-3.71 173.8 2.165 165.8 16.04L79.15 166.5C48.9 219 65.78 284.3 113.6 319.2l-38.75 101.9L52.78 411.9c-20.37-8.499-43.62 1.25-52.12 21.62c-1.75 4.124 .125 8.749 4.25 10.5l162.4 67.37c3.1 1.75 8.624-.125 10.37-4.249c8.374-20.37-1.25-43.87-21.62-52.37l-22.12-9.124l39.37-103.6c4.5 .4999 8.874 1.25 13.12 1.25c51.75 0 99.37-32.1 113.4-85.24l20.25-75.36l20.25 75.36c13.1 52.24 61.62 85.24 113.4 85.24c4.25 0 8.624-.7499 13.12-1.25l39.25 103.6l-22.12 9.124c-20.37 8.499-30.12 31.1-21.62 52.37c1.75 4.124 6.5 5.999 10.5 4.249l162.4-67.37C639.1 442.2 641.1 437.7 639.4 433.6zM275.9 162.1L163.8 115.6l36.5-63.37L294.8 91.4L275.9 162.1zM364.1 162.1l-18.87-70.74l94.49-39.12l36.5 63.37L364.1 162.1z"
              ></path>
            </svg>
            <span class={styles.linkText}>Party</span>
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link className={styles.navLink} to="Study">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="graduation-cap"
              class="svg-inline--fa fa-graduation-cap"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"
              ></path>
            </svg>
            <span class={styles.linkText}>study</span>
          </Link>
        </li>

        <li className={styles.navItem} id="themeButton">
          <Link className={styles.navLink}>
            <svg
              class="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>

            <span className={styles.linkText}>Themify</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default OptionNavbar;
