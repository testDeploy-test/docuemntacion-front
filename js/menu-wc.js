'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AqlDefectosMayoresComponent.html" data-type="entity-link" >AqlDefectosMayoresComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AqlFormComponent.html" data-type="entity-link" >AqlFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AqlGraphicsComponent.html" data-type="entity-link" >AqlGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuditoriaDelProcesoComponent.html" data-type="entity-link" >AuditoriaDelProcesoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuditoriaFormComponent.html" data-type="entity-link" >AuditoriaFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthComponent.html" data-type="entity-link" >AuthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientesComponent.html" data-type="entity-link" >ClientesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientesFormComponent.html" data-type="entity-link" >ClientesFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomersGraphicsComponent.html" data-type="entity-link" >CustomersGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DefectGraphicsComponent.html" data-type="entity-link" >DefectGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DefectosComponent.html" data-type="entity-link" >DefectosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DefectosFormComponent.html" data-type="entity-link" >DefectosFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormatoAuditoriaComponent.html" data-type="entity-link" >FormatoAuditoriaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GraficasComponent.html" data-type="entity-link" >GraficasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ItemsComponent.html" data-type="entity-link" >ItemsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ItemsDefectsGraphicsComponent.html" data-type="entity-link" >ItemsDefectsGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ItemsFormComponent.html" data-type="entity-link" >ItemsFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoDataComponent.html" data-type="entity-link" >NoDataComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoPageComponent.html" data-type="entity-link" >NoPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderItemsGraphicsComponent.html" data-type="entity-link" >OrderItemsGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PedidosComponent.html" data-type="entity-link" >PedidosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PedidosFormComponent.html" data-type="entity-link" >PedidosFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProcesosFormComponent.html" data-type="entity-link" >ProcesosFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TablasComponent.html" data-type="entity-link" >TablasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TecnologiasComponent.html" data-type="entity-link" >TecnologiasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TecnologiasFormComponent.html" data-type="entity-link" >TecnologiasFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserGraphicsComponent.html" data-type="entity-link" >UserGraphicsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserTimeComponent.html" data-type="entity-link" >UserTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UsuariosComponent.html" data-type="entity-link" >UsuariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UsuariosFormComponent.html" data-type="entity-link" >UsuariosFormComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AqlDefectosMayoresModel.html" data-type="entity-link" >AqlDefectosMayoresModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuditoriaDelProcesoModel.html" data-type="entity-link" >AuditoriaDelProcesoModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientesModel.html" data-type="entity-link" >ClientesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefectosModel.html" data-type="entity-link" >DefectosModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormatoAuditoriaModel.html" data-type="entity-link" >FormatoAuditoriaModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemsModel.html" data-type="entity-link" >ItemsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PedidoItemModel.html" data-type="entity-link" >PedidoItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PedidosModel.html" data-type="entity-link" >PedidosModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcesoDefectoModel.html" data-type="entity-link" >ProcesoDefectoModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/TecnologiasModel.html" data-type="entity-link" >TecnologiasModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuariosModel.html" data-type="entity-link" >UsuariosModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertsService.html" data-type="entity-link" >AlertsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AqlDefectosMayoresService.html" data-type="entity-link" >AqlDefectosMayoresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuditoriaDelProcesoService.html" data-type="entity-link" >AuditoriaDelProcesoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientesService.html" data-type="entity-link" >ClientesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ColorsService.html" data-type="entity-link" >ColorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefectosService.html" data-type="entity-link" >DefectosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExcelService.html" data-type="entity-link" >ExcelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterService.html" data-type="entity-link" >FilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormatoAuditoriaService.html" data-type="entity-link" >FormatoAuditoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetTablesService.html" data-type="entity-link" >GetTablesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemsService.html" data-type="entity-link" >ItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PedidoItemService.html" data-type="entity-link" >PedidoItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PedidosService.html" data-type="entity-link" >PedidosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcesoDefectoService.html" data-type="entity-link" >ProcesoDefectoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TecnologiasService.html" data-type="entity-link" >TecnologiasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});