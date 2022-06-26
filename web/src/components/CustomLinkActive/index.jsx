import { Link, useMatch, useResolvedPath } from "react-router-dom"

const CustomLinkActive = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link to={to}
            {...props}
            className={`${props.className ? props.className : ''}  ${match ? 'active' : ''}`}
        >
            {children}
        </Link>
    )
}

export default CustomLinkActive