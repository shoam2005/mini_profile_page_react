import { Children } from "react"
import styles from './profile.module.css'
import Button from "./Button"

const ProfileCard=(props)=>{
    let color="base" 
    if(props.description=='Student')
        color='purple'
    if(props.description=='Friend')
        color='green'
    if(props.description=='Theacher')
        color='blue'
    return(
        <><div className={styles.card}>
        <div className={styles.avatar}>{props.name[0]}</div>
        <h2 className={styles.name} >{props.name}</h2>
        <p className={styles.description}>{props.description}</p>
        <Button type={props.type} text='view profile' ></Button>
        </div>
        </>
    )
}
export default ProfileCard