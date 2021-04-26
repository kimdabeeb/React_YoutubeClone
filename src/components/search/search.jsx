import React, { useRef } from 'react';
import styles from './search.module.css';


const Search = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <i className="fas fa-bars"></i>
                <span className={styles.icon}><i className="fab fa-youtube"></i></span>
                <h1 className={styles.logo}>Youtube</h1>
            </div>
            <input 
            ref={inputRef}
            className={styles.input} type="search" placeholder="Search.." onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default Search;