
const Caracteristicas = () => {
    return (
        <div className="container py-5">
            <h1 className="display-4 text-center mb-4">Características de Vite</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Rendimiento</h3>
                    <p>
                        Vite arranca en menos de 1 segundo, incluso en proyectos grandes.
                        Esto se logra al servir los módulos ESM nativamente en el navegador
                        durante el desarrollo.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3>Recarga en caliente</h3>
                    <p>
                        Solo recompila los módulos que cambian, manteniendo el estado de la aplicación
                        y conservando la rápida iteración de desarrollo.
                    </p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Plugins Plug-and-play</h5>
                            <p className="card-text">
                                Extiende Vite con una amplia gama de plugins, como soporte
                                para PWA, Markdown y más.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Compatibilidad TS</h5>
                            <p className="card-text">
                                Vite está listo para TypeScript desde el primer momento, sin
                                configuraciones complejas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Construcción optimizada</h5>
                            <p className="card-text">
                                El bundle para producción está minificado y optimizado,
                                reduciendo tiempos de carga.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caracteristicas;