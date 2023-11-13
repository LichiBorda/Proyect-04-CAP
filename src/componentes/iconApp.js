import React from 'react'
import styles from "./iconApp.module.css"
import imagen from '../imagenes/logo.png';
function IconApp() {
  return (
    <div>
        <div className={styles.imagencontainer}>
        <img className={styles.imagen} src={imagen} alt="" />
        </div>
     <h2 className={styles.titulo}>Ingrese una ciudad y pulse enter... </h2>
    </div>
  )
}

export default IconApp