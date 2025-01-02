import React from "react";

function changePage(page) {

}

function save() {

}

function load() {
    
}

function Header() {
    return (
        <header>
            <nav id="headerNav">
                <ul id="navList">
                    <li><button onClick={changePage(1)}>Mines</button></li>
                    <li><button onClick={changePage(2)}>Forest</button></li>
                    <li><button onClick={changePage(3)}>Smith</button></li>
                    <li><button onClick={changePage(4)}>Build</button></li>
                    <li><button onClick={save()}>Save</button></li>
                    <li><button onClick={load()}>Load</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;