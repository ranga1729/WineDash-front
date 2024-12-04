import { CSSProperties } from 'react'
import Glass from '../assets/Glass.svg'
import SideNavItem from './NavItem'

const SideBarPanel = () => {
  return (
    <div style={Container}>
      <div style={SideBar}>

        <div style={Heading}>
          <img src={Glass} width={25}/>
          <p style={HeadingText}>Wine Analytics</p>
        </div>
        <br/>

        <nav style={NavList}>
          <SideNavItem title='Descriptive Analysis' to='da'/>
          <SideNavItem title='Correlation Analysis' to='ca'/>
          <SideNavItem title='Regional Analysis' to='ra'/>
          <SideNavItem title='Food pairing Analysis' to='fpa'/>
          <SideNavItem title='Wine characteristic Clustering' to='wcc'/>
          <SideNavItem title='Wine price segmentation' to='wps'/>
          <SideNavItem title='Consumer behavior Analysis' to='cba'/>
          <SideNavItem title='Trend Analysis' to='ta'/>
        </nav>
      </div>
    </div>
  )
}

const Container:CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '100vh'
}

const SideBar:CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  height: '100vh',

  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#1c2536',
}

const Heading: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '70px',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#252e3e',
  borderBottomRightRadius: '30px',
  borderBottomLeftRadius: '30px',
  gap: '5px'
}

const HeadingText: CSSProperties = {
  fontSize: '25px',
  fontWeight: 'bold',
  fontFamily: 'Inter',
  color: '#6366f1'
}

const NavList: CSSProperties = {
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'column',
  flex: '1',
  justifyContent: 'center', 
}

const NavItem: CSSProperties = {
  fontSize: '1.3 rem',
  fontFamily: 'Inter',
  lineHeight: '30px',
  paddingLeft: '10px',
  color: 'white'
}

export default SideBarPanel;
