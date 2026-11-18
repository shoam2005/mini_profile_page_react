import styles from './button.module.css'
const Button=(props)=>{
   
       
    return(
        <>
        <button className={styles[props.type]}>{props.text}</button>
        
        </>
    )
}
export default Button