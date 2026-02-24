
const Historia = () => {
    return (
        <div className="container py-5">
            <h1 className="display-4 mb-4">Historia de Vite</h1>
            <p className="lead">
                Vite fue creado por Evan You, el autor de Vue.js, como una respuesta
                a las lentas herramientas de bundling. Lanzado en 2020, rápidamente
                ganó popularidad en la comunidad de frontend.
            </p>
            <p>
                Su nombre significa "rápido" en francés y refleja su enfoque en
                tiempos de desarrollo ágil. Desde entonces, ha evolucionado para
                soportar múltiples frameworks y se ha convertido en el estándar para
                muchos proyectos modernos.
            </p>
            <div className="mt-4">
                <h3>Línea de tiempo</h3>
                <ul className="timeline list-group">
                    <li className="list-group-item">2020: lanzamiento inicial</li>
                    <li className="list-group-item">2021: soporte React y Vue 3</li>
                    <li className="list-group-item">2022: versión 3, mejoras de rendimiento</li>
                    <li className="list-group-item">2023: adopción masiva en la comunidad</li>
                </ul>
            </div>
        </div>
    );
};

export default Historia;