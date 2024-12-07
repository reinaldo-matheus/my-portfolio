import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss";
import Image from 'next/image'; 

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Objective" />
            <p>Como desenvolvedor Web Full Stack, meu objetivo é aplicar meus conhecimentos em
HTML, CSS, JavaScript, Java, SQL e Git na criação de soluções web inovadoras e de alta
qualidade. Busco contribuir para o desenvolvimento de interfaces visuais atrativas e funcionais, bem como para o desenvolvimento de sistemas robustos e escaláveis no back-end.</p>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt="logo react"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-4">
                            <span>9 months</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/js.png"
                        alt="logo JavaScript"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                        <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/java.png"
                        alt="logo Java"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                        <span>9 months</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/ts.png"
                        alt="logo TypeScript"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                        <span>9 months</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
