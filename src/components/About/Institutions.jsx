import React from "react";
import { useTranslation } from 'react-i18next';

import logoApn from "assets/logos/institutions/logo-apn.png";
import logoMTD from "assets/logos/institutions/logo-min-turismo-deportes.png"
import logoJica from "assets/logos/institutions/logo-jica.png"
import logoEmbajada from "assets/logos/institutions/logo-cc-embajada.png"
import logoUnicin from "assets/logos/institutions/logo-unicin.png"

const Institutions = () => {
    const [t] = useTranslation();
    return (
        <article className="md-margin-bottom">
            <h1 className="title-light display-8 text-center">
                {t('INSTITUTIONS.TITLE').toUpperCase()}
            </h1>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-3 mx-auto px-md-5 py-2">
                            <img
                                className="w-100 "
                                src={logoApn}
                                alt="Logo"
                            />
                        </div>
                        <div className="col-4 mx-auto px-md-5 py-3">
                            <img
                                className="w-100 "
                                src={logoMTD}
                                alt="Logo"
                            />
                        </div>
                        <div className="col-3 mx-auto px-md-5 py-3">
                            <img
                                className="w-100 "
                                src={logoEmbajada}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-3 mx-auto px-md-5 py-2">
                            <img
                                className="w-100 "
                                src={logoJica}
                                alt="Logo"
                            />
                        </div>
                        
                        <div className="col-3 mx-auto px-md-5 py-3">
                            <img
                                className="w-100 "
                                src={logoUnicin}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Institutions;