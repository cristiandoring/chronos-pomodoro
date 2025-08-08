import styles from './styles.module.css'
import { HouseIcon } from "lucide-react"
import { HistoryIcon } from "lucide-react"
import { SettingsIcon } from "lucide-react"
import { SunIcon } from "lucide-react"

export function Menu(){
return(
    <nav className={styles.menu}>
        <a href="#" className={styles.menuLink}>
            <HouseIcon/>
        </a>

        <a href="#" className={styles.menuLink}>
            <HistoryIcon/>
        </a>

        <a href="#" className={styles.menuLink}>
            <SettingsIcon/>
        </a>

        <a href="#" className={styles.menuLink}>
            <SunIcon/>
        </a>
            
            
            
    </nav>
)
}