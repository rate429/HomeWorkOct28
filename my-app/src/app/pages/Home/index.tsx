import './css/style.css'

export default function Home() {
    return (
        <div className="Home">
                <div className="card-1">
                    <h2>Riley Rager</h2>
                    <h4>Student</h4>
                    <p>I have two goals in life. Which are, Join the air force and do cyber and have a famliy</p>
            </div>

                <div className="card-2">
                    <h2>Skills</h2>
                    <p>Write two sentences about the skills you have learned in this class and list 5 web development technologies/tools/programming languages you want to learn: </p>
                    <p>I have learned how to use framworks react and nextjs. I have also learned how to use tailwind css; I want to learn Java, C, teaVM, Wasm,Rust (c and rust can compile to web asm or web assembly to run in the web; java can be ran via teavm if you want a example ask me in clas)</p>
                    <ul>
                        <li>Tailwind css</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>JS</li>
                        <li>TS</li>
                        <li>Npm/Npx</li>
                    </ul>
                </div>

                <section className="card-3">
                    <h2>Life Goals</h2>
                    <h4>Goals</h4>
                    <p>My goals for learning in this class are simple. To have help when learning more advaced things e.g Java, C, etc and to have time to code at school.</p>
                </section>

        </div>
    )
}