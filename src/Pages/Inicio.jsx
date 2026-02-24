
const Inicio = () => {
    return (
        <div className="container py-5">
            <div className="jumbotron bg-light p-5 rounded text-center">
                <img
                    src="https://vitejs.dev/logo.svg"
                    alt="Vite logo"
                    width="100"
                    className="mb-4"
                />
                <h1 className="display-4">Bienvenido a Vite</h1>
                <p className="lead">
                    Esta aplicación usa Vite como bundler y servidor de desarrollo.
                    Vite acelera el desarrollo con recarga en caliente y compilaciones
                    optimizadas para producción.
                </p>
                <hr className="my-4" />
                <p>Modifica los archivos en <code>src/</code> y observa los cambios al instante.</p>
                <a className="btn btn-primary btn-lg me-2" href="/caracteristicas" role="button">
                    Ver características
                </a>
                <a className="btn btn-secondary btn-lg" href="/historia" role="button">
                    Ver historia
                </a>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Desarrollo rápido</h5>
                            <p className="card-text">
                                Gracias a la recarga en caliente y a la arquitectura basada
                                en módulos, los tiempos de espera desaparecen.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Optimizado para producción</h5>
                            <p className="card-text">
                                Vite produce bundles ligeros usando Rollup bajo el capó.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Soporte moderno</h5>
                            <p className="card-text">
                                Funciona con React, Vue, Svelte y cualquier proyecto
                                basado en ES modules.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
        
        