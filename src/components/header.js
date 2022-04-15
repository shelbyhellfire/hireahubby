import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-material-ui-components"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'primary',
      marginBottom: `1.45rem`,
    }}
  >
    <div
    className='MuiGrid-container'
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',

      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
    <StaticImage
      src="../images/hireahubby-house-2.png"
      width={40}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt={siteTitle}
      style={{ marginBottom: `1.45rem` }}
      />
        </Link>
      </h1>
      <nav>
      <Link to="/services">Services</Link> <br />
      <Link to="/previous-work">Previous work</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
