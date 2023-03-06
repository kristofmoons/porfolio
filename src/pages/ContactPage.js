import Navbar from "../components/Navbar";

export default function ContactPage(){
 return(
     <>
     <Navbar/>
         <div style={{height:"6rem"}}/>

         <div className="container">
         <div className="contact__wrapper shadow-lg mt-n9">
             <div className="row no-gutters">
                 <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                     <h3 className="color--white mb-5">Contact</h3>

                     <ul className="contact-info__list list-style--none position-relative z-index-101">
                         <li className="mb-4 pl-4">
                             <span className="position-absolute"><i
                                 className="fas fa-envelope"></i></span> test@test.com
                         </li>
                         <li className="mb-4 pl-4">
                             <span className="position-absolute"><i className="fas fa-phone"></i></span> +32 71 123 456
                         </li>
                         <li className="mb-4 pl-4">
                             <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span> E6K
                             <br/> Quai de la gare
                                 <br/> 6000 Charleroi

                                     <div className="mt-3">
                                         <a href="https://www.google.com/maps" target="_blank"
                                            className="text-link link--right-icon text-white">Itinéraire <i
                                             className="link__icon fa fa-directions"></i></a>
                                     </div>
                         </li>
                     </ul>
                 </div>

                 <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                     <form action="#" className="contact-form form-validate" noValidate="novalidate">
                         <div className="row">
                             <div className="col-sm-6 mb-3">
                                 <div className="form-group">
                                     <label className="required-field" htmlFor="firstName">Prénom</label>
                                     <input type="text" className="form-control" id="firstName" name="firstName"
                                            placeholder="Jean"/>
                                 </div>
                             </div>

                             <div className="col-sm-6 mb-3">
                                 <div className="form-group">
                                     <label htmlFor="lastName">Nom</label>
                                     <input type="text" className="form-control" id="lastName" name="lastName"
                                            placeholder="Dupont"/>
                                 </div>
                             </div>

                             <div className="col-sm-6 mb-3">
                                 <div className="form-group">
                                     <label className="required-field" htmlFor="email">Email</label>
                                     <input type="text" className="form-control" id="email" name="email"
                                            placeholder="jean@dupont.com"/>
                                 </div>
                             </div>

                             <div className="col-sm-6 mb-3">
                                 <div className="form-group">
                                     <label htmlFor="phone">Téléphone</label>
                                     <input type="tel" className="form-control" id="phone" name="phone"
                                            placeholder="+32 71 123 456"/>
                                 </div>
                             </div>

                             <div className="col-sm-12 mb-3">
                                 <div className="form-group">
                                     <label className="required-field" htmlFor="message">Comment pouvons-nous vous aider
                                         ?</label>
                                     <textarea className="form-control" id="message" name="message" rows="4"
                                               placeholder="Bonjour, j'aimerais…"></textarea>
                                 </div>
                             </div>

                             <div className="col-sm-12 mb-3">
                                 <button type="submit" name="submit" className="btn btn-primary">Envoyer</button>
                             </div>

                         </div>
                     </form>
                 </div>
             </div>
         </div>
     </div>
</>
 );
}