import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';

import { BsFillCursorFill, BsFillFileEarmarkCodeFill, BsPaletteFill, BsWrench } from 'react-icons/bs';
import HeadComponent from '../components/HeadComp';

export default function GeneralProjects() {
    const router = useRouter();
    const Box = (props) => {
        switch (props.projtype) {
            case 0:
                var bgcolor = "#D45168";
                var typetitle = "PRODUCT DESIGNS";
                var pagelink = "projects/design";
                var caption = "User interface, experience, and interaction designs";
                var icon = <BsFillCursorFill color="white" size={30}/>;
                var animId = 'anim1';
                break;
            case 1: 
                var bgcolor = "#4374BE";
                var typetitle = "SOFTWARE PROJECTS";
                var pagelink = "projects/software";
                var caption = "Programming and software work";
                var icon = <BsFillFileEarmarkCodeFill color="white" size={30}/>;
                var animId = 'anim2';
                break;
            case 2:
                var bgcolor = "#D45168";
                var typetitle = "GRAPHIC DESIGN & VISUAL ART";
                var pagelink = "projects/visualart";
                var caption = "Illustrations, publication, marketing, or other visual art/designs";
                var icon = <BsPaletteFill color="white" size={30}/>;
                var animId = 'anim3';
                break;
            default:
                var bgcolor = "#4374BE";
                var typetitle = "ENGINEERING PROJECTS";
                var pagelink = "projects/engineering";
                var caption = "Mechanical/electrical engineering or industrial design projects";
                var icon = <BsWrench color="white" size={30}/>;
                var animId = 'anim4';
                break;
        }
        var delay = String(props.projtype*2) + 's';
        console.log('delay: ', delay)

        return (
            <div className='box-container' id={animId}>
                <div className='projecttypebox'style={{backgroundColor:bgcolor, animation: delay}} onClick={()=>router.push(pagelink)}>
                    {icon}
                    <a>{typetitle}</a>
                </div>
                <p>{caption}</p>
            </div>
        )
    }

    return (
        <>
            <HeadComponent/>
            <NavBar/>
            <div className='page'>
                <div className='container'>
                    <h1> PORTFOLIO </h1>
                </div>
                <div className='projectportalcontainer'>
                    <Box projtype={0}/>
                    <Box projtype={1}/>
                    <Box projtype={2}/>
                    <Box projtype={3}/>
                </div>
                
            </div>
        </>
    );
}