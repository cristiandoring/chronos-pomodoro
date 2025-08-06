import styles from './Heading.module.css'

//tipagem do componente
type HeadingProps={
    //a props children aceitara qualquer coisa dentro dele (componentes, strings...)
    children:React.ReactNode
}
console.log(styles);


export function Heading({children}:HeadingProps){
    return(


        <h1 className={styles.heading}>{children}</h1>
    )
}