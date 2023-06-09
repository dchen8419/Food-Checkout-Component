import { Fragment } from 'react'
import mealsImage from '../../Assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

function Header(props) {
    return <Fragment>
            <header className={classes.header}>
                <h1>Restaurants Name</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    
}

export default Header