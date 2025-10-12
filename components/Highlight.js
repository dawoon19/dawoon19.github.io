import { useRef } from "react";
import useCardVisibiliity from "../hooks/renderOnScroll";
import CategoryList from "./CategoryList";
import { useRouter } from 'next/router';

export default function Highlight(props) {
    const router = useRouter();
    const ref = useRef(null);
    const isVisible = useCardVisibiliity(ref);

    const isRightAligned = props.right;

    let className = "highlight";
    let data = {
        title:"",
        categories:[],
        org:"",
        desc:"",
        link:""
    }
    let thumbnail = "";
    if (props.data) {
        data = props.data;
        thumbnail = "url(../" + data.photo + ")";
    }
    // let url = "url(../"+props.data.photo+")";

    if (isRightAligned) {
        className += " right";
    }
    if (!isVisible) {
        className += " invisible";
    }

    function SideText() {

        return <div className="highlightSideText">
            {/* <CategoryList categories={["AI/ML", "Research"]}/>
            <h2>AI TEAMMATE FOR COLLABORATIVE DESIGN</h2>
            <h3>UC Berkeley Co-Design Lab</h3>
            <p>AI web application that listens to and watches collaborative design 
                whiteboarding and provides feedback for guiding design direction 
                and ideation.</p> */}
            <CategoryList categories={data.categories}/>
            <h2>{data.title}</h2>
            <h3>{data.org}</h3>
            <p>{data.desc}</p>
            {data.link && <button onClick={()=>router.push(data.link)}>LEARN MORE {">>"}</button>}
        </div>
    }


    
    return (
        <span ref={ref} className={className}>
            <div className="highlightThumbnail" style={{backgroundImage:thumbnail}}></div>
            <SideText/>
        </span>
    );
}