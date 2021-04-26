import React from 'react';
import styles from './side_menu.module.css';

const SideMenu = () => (
    <nav className={styles.nav}>
        <button className={styles.button}>
            <i className="fas fa-home"></i>
            <span>홈</span>
        </button>
        <button>
            <i className="fas fa-fire"></i>
            <span>인기</span>
        </button>
        <button>
            <i className="fas fa-envelope"></i>
            <span>구독</span>
        </button>
        <button>
            <i className="fas fa-box"></i>
            <span>보관함</span>
        </button>
    </nav>
);

export default SideMenu;