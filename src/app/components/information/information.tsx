import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"


export function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
                <span>🇺🇸 EN: Intermediary</span>
                <span>ES: Intermediary</span>
                <span>🇧🇷 PT-BR: Native Speaker</span>
            </div>
            <SectionTitle text="Education" />
            <div className="educational-info">
                <span>🎓</span>
                <span>full stack developer</span>
            </div>
        </div>
    )
}