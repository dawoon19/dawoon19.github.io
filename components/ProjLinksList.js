
import styles from '../styles/list.module.css';

import { useEffect, useState } from 'react';

import {BsGlobe2, BsGithub} from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { SiDevpost } from "react-icons/si";

export default function ProjLinks(props) {
    var components = [];
    const separator = <div className={styles.separator}>&nbsp;&nbsp;•&nbsp;&nbsp;</div>;
    for (let link in props.links) {
        switch (link) {
            case "Devpost":
                var icon = <SiDevpost className={styles.icon} size={20}/>
                break;
            case "Github":
                var icon = <BsGithub className={styles.icon} size={20}/>
                break;
            case "Figma":
                var icon = <FiFigma className={styles.icon} size={20}/>
                break;
            default:
                var icon = <BsGlobe2 className={styles.icon} size={20}/>

        }

        components.push(
            {"icon": icon, "link": link}
        );
    }

    return (
        <div className={styles.linksList}>
            {
                components.map((comp) => 
                    <a href={props.links[comp["link"]]} target="_blank" className={styles.link} key={comp["link"]}>
                        {comp["icon"]}<p>{comp["link"]}</p>
                        <div className={styles.separator}>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                    </a>
                )
            }
        </div>
    )
}