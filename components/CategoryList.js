import styles from '../styles/list.module.css';
import {BsGlobe2, BsHeartFill, BsFillPhoneFill, BsHeadsetVr, BsSearch, BsController, BsFillBookFill, BsPaletteFill,BsVectorPen, BsFillCursorFill} from 'react-icons/bs';
import { AiFillRobot } from "react-icons/ai";
import { GoCircuitBoard } from "react-icons/go";
import {HiCube} from 'react-icons/hi';

export default function CategoryList(props) {
    const categoryDict = { 'Website': <BsGlobe2 size={15} style={{marginRight:"8px"}}/>, 
                            'Health':  <BsHeartFill size={15} style={{marginRight:"8px"}}/>,
                            'Mobile': <BsFillPhoneFill size={15} style={{marginRight:"8px"}}/>,
                            'AR/VR': <BsHeadsetVr size={15} style={{marginRight:"8px"}}/>,
                            'Research': <BsSearch size={15} style={{marginRight:"8px"}}/>,
                            'Game Design': <BsController size={15} style={{marginRight:"8px"}}/>,
                            'Publications': <BsFillBookFill size={15} style={{marginRight:"8px"}}/>,
                            'Illustrations': <BsPaletteFill size={15} style={{marginRight:"8px"}}/>,
                            'Graphic Design': <BsVectorPen size={15} style={{marginRight:"8px"}}/>,
                            'UI/UX': <BsFillCursorFill size={15} style={{marginRight:"8px"}}/>,
                            'AI/ML': <AiFillRobot size={15} style={{marginRight:"8px"}}/>,
                            'Circuits': <GoCircuitBoard size={15} style={{marginRight:"8px"}}/>,
                            'CAD': <HiCube size={15} style={{marginRight:"8px"}}/>,
                        }

    return (
        <div className={styles.categoryList}>
            {props.categories.map((cat)=>{
                return <div key={cat} className={styles.category}>
                        {categoryDict[cat]}{cat} <div className={styles.separator}>&nbsp;&nbsp;•&nbsp;&nbsp;</div> 
                    </div>
            })}
        </div>
    );
}