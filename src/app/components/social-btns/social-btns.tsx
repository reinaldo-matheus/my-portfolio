import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import"./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
         <a href="">
           <InstaIcon/>
         </a>
         <a href="https://www.linkedin.com/in/matheus-reinaldo/">
            <LinkedinIcon/>
         </a>
         <a href="https://github.com/reinaldo-matheus">
            <GitHubIcon/>
         </a>
         
        </div>
    )
}