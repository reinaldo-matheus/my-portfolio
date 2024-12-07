import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"


export function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
            <span>🇺🇸 EN - Fluent</span>
            <span>🇧🇷 PT-BR - Intermediary</span>
                <span>ES: Intermediary</span>
            </div>
            <SectionTitle text="Education" />
            <div className="educational-info">
                <span>🎓</span>
                <span>Full Stack Developer</span>
            </div>
        </div>
    )
}