import { Component } from 'react';
import '../componentCSS/component.css'
import { FaFacebook, FaTwitter, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

class FooterComponent extends Component{
render() {
    return (
        
        <footer className="page-footer font-small pt-4 footer">
                <div className="container bottom_border">
                <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_dark_amrc pt2">Find/Contact us</h5>

                <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <p><HiLocationMarker/> Store Address</p>
                <p><FaPhoneAlt/>  +63-922nogtunog  </p>
                <p><GrMail/> info@example.com  </p>
                
                
                <ul className="foote_bottom_ul_amrc" style={{ 'display':"inline", 'margin':"15px auto 0 auto", 'listStyleType':"none" }}>
                <li><Link to="/" style={{ 'color':"black", 'padding':"8px", }}>
                        <FaFacebook/>
                    </Link></li>
                <li><Link to="/" style={{ 'color':"black", 'padding':"8px"}}><FaTwitter/></Link></li>
                <li><Link to="/" style={{ 'color':"black", 'padding':"8px" }}><FaInstagramSquare/></Link></li>
                </ul>

                </div>


                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_dark_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                </ul>

                </div>


                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_dark_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                </ul>

                </div>


                <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_dark_amrc pt2">Payment methods</h5>


                <ul className="footer_ul2_amrc">
                <li><img src="https://img.icons8.com/carbon-copy/50/000000/gcash.png" alt="gcash"/><p>GCash</p></li>
                </ul>

                </div>
                </div>
                </div>


                <div className="container">
                <ul className="foote_bottom_ul_amrc">
                {/* <li><Link style={{ 'color':"black", 'margin':"0 12px" }}>lorem</Link></li>
                <li><Link style={{ 'color':"black", 'margin':"0 12px" }}>lorem</Link></li>
                <li><Link style={{ 'color':"black", 'margin':"0 12px" }}>lorem</Link></li>
                <li><Link style={{ 'color':"black", 'margin':"0 12px" }}>lorem</Link></li> */}
                <p className="text-center">Copyright &copy;2021 | Developed by @ Group1</p>
                </ul>

                </div>

</footer>

    )
}
}

export default FooterComponent

