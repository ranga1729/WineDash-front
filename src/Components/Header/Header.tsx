import { useState } from 'react'
import Glass from '../../assets/WineGlass.svg'
import DownArrow from '../../assets/DownArrow.svg'
import NavItem from '../NavItem/NavItem'
import styles from './header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


const Header = () => {
  const[showModal, setShowModal] = useState(false)
  const[title, setTitle] = useState("No category selected")

  const toggle = () => setShowModal(!showModal)

  const ModalVisibility = () => {
    return (
      <Modal isOpen={showModal} toggle={toggle} size='lg'>
        <ModalHeader toggle={toggle}>Select Analysis Type</ModalHeader>
        <ModalBody onClick={toggle}>
          <NavItem title='Descriptive Analysis' to='/da' onClick={setTitle} />
          <NavItem title='Correlation Analysis' to='/ca' onClick={setTitle} />
          <NavItem title=' Regional Analysis' to='/ra' onClick={setTitle} />
          <NavItem title='Food Pairing Analysis' to='/fpa' onClick={setTitle} />
        </ModalBody>
      </Modal>
    )
  }

  return <>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={Glass} className={styles.wineGlass} width={25}/>
          <p>Wine Analytics</p>
        </div>
        <div className={styles.arrowContainer} onClick={toggle}>
          <img src={DownArrow} className={styles.downArrow} width={20} onClick={toggle} />
        </div>
      </div>

      <div className={styles.headerTitle}>
        <p className={styles.headerText}>{title}</p>
      </div>
    </div>

    {ModalVisibility()}
  </>
}
export default Header;
