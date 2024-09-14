import { Link, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'

const NavItem = ({ linkName, route }) => {
  return (
    <Link
        href={route}
        paddingY={{base: 2, lg: 0}}
        textAlign={'center'}
        cursor={'pointer'}
    >
        { linkName }
    </Link>     
  )
}

NavItem.propTypes = 
{
    route: PropTypes.string,
    linkName: PropTypes.string
}


export default NavItem
