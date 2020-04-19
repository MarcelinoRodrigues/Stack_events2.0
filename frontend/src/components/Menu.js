import React from 'react';

const Menu = (props) => (
    <nav>
        <ul>
            {React.Children.map(props.children, child =>
                <li id={child.props.id}>
                    {child}
                </li>
            )}
        </ul>
    </nav>
);

export default Menu;