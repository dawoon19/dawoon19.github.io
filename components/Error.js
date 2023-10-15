import { useRouter } from 'next/router';
import styles from '../styles/error.module.css';

export default function Error(props) {
    const router = useRouter();
    return (
        <div className={styles.errorPage}>
            <div id={styles.icon}>&#128560;</div>
            <h4>404 Error</h4>
            <h1>Page not found!</h1>
            {/* {props.projtype && 
                <>
                <p><strong>{props.projtype}</strong> doesn't exist. Did you mean...</p>
                <a onClick={()=>{router.push('/projects/design')}}>DESIGN</a>
                </>
            } */}
        </div>
    );
}