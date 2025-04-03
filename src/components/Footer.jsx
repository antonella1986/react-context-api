export default function Footer() {

    return (
        <>

            <footer class="text-center text-lg-start bg-body-tertiary text-muted">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></a>
                        <a href="" className="me-4 text-reset"><i className="fab fa-twitter"></i></a>
                        <a href="" className="me-4 text-reset"><i className="fab fa-google"></i></a>
                        <a href="" className="me-4 text-reset"><i className="fab fa-instagram"></i></a>
                        <a href="" className="me-4 text-reset"><i className="fab fa-linkedin"></i></a>
                        <a href="" className="me-4 text-reset"><i className="fab fa-github"></i></a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"><i className="fas fa-gem me-3"></i>My Ecommerce</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p><a href="#!" className="text-reset">Angular</a></p>
                                <p><a href="#!" className="text-reset">React</a></p>
                                <p><a href="#!" className="text-reset">Vue</a></p>
                                <p><a href="#!" className="text-reset">Laravel</a></p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p><a href="#!" className="text-reset">Pricing</a></p>
                                <p><a href="#!" className="text-reset">Settings</a></p>
                                <p><a href="#!" className="text-reset">Orders</a></p>
                                <p><a href="#!" className="text-reset">Help</a></p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contacts</h6>
                                <p><i className="fas fa-home me-3"></i> Italia</p>
                                <p><i className="fas fa-envelope me-3"></i>info@example.com</p>
                                <p><i className="fas fa-phone me-3"></i> 123456789</p>
                                <p><i className="fas fa-print me-3"></i> 123456789</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>© 2025 Copyright</div>

            </footer>

        </>
    )
}   