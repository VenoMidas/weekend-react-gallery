import './Header.css'; // import css file

/**
 * Header component function
 * @returns content to be displayed on DOM
 */
function Header() {
    // return content displayed on DOM
    return (
        <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
        </header>
    );
};

export default Header; // export component called in App.jsx