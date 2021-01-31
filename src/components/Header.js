import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
       <header>

           <h1>{title}</h1>

       </header>
    )
} 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// EXAMPLE of CSS in-line JS
//
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
    